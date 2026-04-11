import { supabase } from './supabase';
import { Specialist, SpecialistCategory } from '../data/specialists';
import { Article, Category, articles as staticArticles } from '../data/newsArticles';

// Helper to generate a URL-friendly slug
const generateSlug = (firstName: string, lastName: string) => {
  return `${firstName}-${lastName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
};

export async function fetchSpecialists(): Promise<Specialist[]> {
  const { data, error } = await supabase
    .from('specialists')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching specialists:', error);
    throw error;
  }

  // Parse strings and map to Specialist interface
  return (data || []).map((row) => {
    // some comma-separated arrays are returned as single strings, some as real arrays
    const parseArray = (val: any): string[] => {
      if (Array.isArray(val)) return val;
      if (typeof val === 'string') return val.split(';').map(s => s.trim()).filter(Boolean);
      return [];
    };

    return {
      slug: generateSlug(row.first_name || row.clinic_name || 'partner', row.last_name || ''),
      name: `${row.first_name || ''} ${row.last_name || ''}`.trim() || row.clinic_name || 'Unnamed Partner',
      role: row.professional_title || '',
      category: (row.primary_category as SpecialistCategory) || 'All',
      specificTitle: row.specific_title,
      bio: row.professional_bio ? [row.professional_bio] : [],
      quote: row.testimonial_1 || '',
      credentials: parseArray(row.credentials).map(c => c.replace(/^- /, '')), // Remove leading dashes if exist
      
      // Image Handling
      image: row.profile_picture_url || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      gallery_image_urls: parseArray(row.gallery_image_urls),
      secondaryImage: parseArray(row.gallery_image_urls)[0], // Use first gallery image as secondary if available

      // New TBN Fields mappings
      specialization_tags: parseArray(row.specialization_tags),
      primary_testing_methods: parseArray(row.primary_testing_methods),
      first_balance_result: row.first_balance_result,
      second_balance_result: row.second_balance_result,
      why_joined_tbn: row.why_joined_tbn,
      other_blood_tests: row.other_blood_tests,
      
      // Contact & Location
      email_address: row.email_address,
      phone_number: row.phone_number,
      address: row.address,
      clinic_name: row.clinic_name,
      location: row.address, // For simpler filtering based on existing mock logic
      is_approved: row.is_approved,

      // Other properties mapped best-effort
      consultationType: row.consultation_type,
      testimonials: [
        { text: row.testimonial_1, name: 'Client' },
        { text: row.testimonial_2, name: 'Client' },
        { text: row.testimonial_3, name: 'Client' },
      ].filter(t => !!t.text),
      accepting_new_clients: row.accepting_new_clients,
      newsHubContributions: row.news_hub_article_interest,
    };
  });
}

export async function fetchNewsArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('news_articles')
    .select('*')
    .order('published_date', { ascending: false });

  if (error || !data || data.length === 0) {
    if (error) {
      console.warn('Supabase fetch failed or table missing. Falling back to static news data:', error.message);
    }
    return staticArticles;
  }

  return data.map((row) => ({
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category as Category,
    author: row.author,
    date: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(row.published_date)),
    image: row.image,
    readTime: row.read_time,
    featured: row.featured,
    longRead: row.long_read,
  }));
}

export async function fetchNewsCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from('news_categories')
    .select('name')
    .order('name');

  if (error || !data || data.length === 0) {
    if (error) console.warn('Supabase fetch failed or categories missing. Falling back to static categories.', error.message);
    return ["Public Health", "Medical Research", "Biotechnology", "AI & Digital Health", "Pharma & Policy", "Global Health"];
  }

  return data.map((row) => row.name);
}

export async function fetchNewsArticleById(id: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('news_articles')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    if (error) console.warn('Supabase fetch failed for article. Falling back to static data:', error.message);
    const staticArticle = staticArticles.find(a => a.id === id);
    return staticArticle || null;
  }

  return {
    id: data.id,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category as Category,
    author: data.author,
    date: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(data.published_date)),
    image: data.image,
    readTime: data.read_time,
    featured: data.featured,
    longRead: data.long_read,
  };
}
