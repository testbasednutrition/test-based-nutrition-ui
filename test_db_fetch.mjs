import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log("URL:", supabaseUrl);
console.log("KEY:", supabaseAnonKey ? "exists" : "missing");

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const { data, error } = await supabase
  .from('specialists')
  .select('*')
  .order('created_at', { ascending: false });

if (error) {
  console.error("Error:", error);
} else {
  console.log("Success. Rows:", data.length);
  if (data.length > 0) {
    console.log("First row keys:", Object.keys(data[0]));
    console.log("First row data samples:");
    console.log("name:", data[0].first_name, data[0].last_name);
    console.log("clinic_name:", data[0].clinic_name);
    console.log("professional_bio:", data[0].professional_bio);
  }
}
