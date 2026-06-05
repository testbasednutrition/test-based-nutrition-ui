import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const { data, error } = await supabase
  .from('specialists')
  .select('*');

if (error) {
  console.error(error);
} else {
  const anne = data.find(r => {
    const slug = `${r.first_name || ''}-${r.last_name || ''}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+|-+$)/g, '');
    return slug === 'anne-cooper';
  });
  console.log("Anne Cooper record:", JSON.stringify(anne, null, 2));
}
