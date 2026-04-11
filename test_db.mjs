import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

// We might need to copy the supabase URL and KEY from .env.local
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);
const { data, error } = await supabase.from('specialists').select('*').limit(5);
console.log(JSON.stringify(data, null, 2));
console.error(error);
