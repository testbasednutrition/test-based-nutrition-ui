import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const { data, error } = await supabase
  .from('specialists')
  .select('*')
  .order('created_at', { ascending: false });

if (error) {
  console.error("Error:", error);
} else {
  // Parse strings and map to Specialist interface
  const generateSlug = (firstName, lastName) => {
    return `${firstName}-${lastName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+|-+$)/g, '');
  };

  const specialists = (data || []).map((row) => {
    const parseArray = (val) => {
      if (Array.isArray(val)) return val;
      if (typeof val === 'string') return val.split(';').map(s => s.trim()).filter(Boolean);
      return [];
    };

    return {
      slug: generateSlug(row.first_name || row.clinic_name || 'partner', row.last_name || ''),
      name: `${row.first_name || ''} ${row.last_name || ''}`.trim() || row.clinic_name || 'Unnamed Partner',
      role: row.professional_title || '',
      bio: row.professional_bio ? [row.professional_bio] : [],
      image: row.profile_picture_url || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    };
  });

  console.log("Total specialists mapped:", specialists.length);
  for (let i = 0; i < specialists.length; i++) {
    const s = specialists[i];
    console.log(`[${i}] name="${s.name}" slug="${s.slug}" role="${s.role}" image="${s.image}" bio_len=${s.bio.length}`);
    if (s.bio.length > 0 && typeof s.bio[0] !== 'string') {
      console.log(`WARNING: bio[0] is not a string:`, typeof s.bio[0], s.bio[0]);
    }
    if (typeof s.name !== 'string') {
      console.log(`WARNING: name is not a string:`, typeof s.name, s.name);
    }
    if (typeof s.slug !== 'string') {
      console.log(`WARNING: slug is not a string:`, typeof s.slug, s.slug);
    }
    if (typeof s.role !== 'string') {
      console.log(`WARNING: role is not a string:`, typeof s.role, s.role);
    }
  }
}
