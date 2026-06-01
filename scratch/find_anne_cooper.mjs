import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envContent = fs.readFileSync('.env.local', 'utf8');
const url = envContent.match(/VITE_SUPABASE_URL=(.*)/)[1].trim();
const key = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1].trim();

const supabase = createClient(url, key);

const { data, error } = await supabase
  .from('specialists')
  .select('*');

if (error) {
  console.error("Error fetching:", error);
} else {
  console.log("Found specialists count:", data.length);
  data.forEach((s, idx) => {
    console.log(`[${idx}] ID: ${s.id} Name: ${s.first_name} ${s.last_name} Category: ${s.primary_category} Title: ${s.professional_title} Specific: ${s.specific_title}`);
  });
}
