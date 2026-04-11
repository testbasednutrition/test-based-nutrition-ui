import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);
const { data, error } = await supabase.rpc('get_schema'); // or something else to fetch columns
// Actually we can just do a select with limit 0 and get the keys if we fetch without json parsing.
// Wait, REST API:
const res = await fetch(`${process.env.VITE_SUPABASE_URL}/rest/v1/specialists?limit=1`, {
  headers: { 'apikey': process.env.VITE_SUPABASE_ANON_KEY }
});
const json = await res.json();
console.log(Object.keys(json[0]));
