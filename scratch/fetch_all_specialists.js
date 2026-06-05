import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Parse .env.local manually
const envPath = path.resolve('.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    } else if (value.startsWith("'") && value.endsWith("'")) {
      value = value.substring(1, value.length - 1);
    }
    env[key] = value.trim();
  }
});

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  const { data, error } = await supabase
    .from('specialists')
    .select('first_name, last_name, affiliate_code, is_approved, is_tbn_partner, email_address');

  if (error) {
    console.error("Error fetching specialists:", error);
  } else {
    console.log("Total specialists in database:", data.length);
    data.forEach((s, idx) => {
      console.log(`[${idx}] name="${s.first_name} ${s.last_name}" affiliate_code="${s.affiliate_code}" is_approved=${s.is_approved} is_tbn_partner=${s.is_tbn_partner} email="${s.email_address}"`);
    });
  }
}

run();
