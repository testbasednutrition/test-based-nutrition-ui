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

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Anon Key length:", supabaseAnonKey ? supabaseAnonKey.length : 0);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function inspectTable(tableName) {
  console.log(`\n--- Inspecting Table: ${tableName} ---`);
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .limit(3);

  if (error) {
    console.error(`Error querying ${tableName}:`, error.message);
  } else {
    console.log(`Found ${data.length} rows.`);
    if (data.length > 0) {
      console.log("Columns:", Object.keys(data[0]));
      console.log("Sample Data Row 1:", JSON.stringify(data[0], null, 2));
    }
  }
}

async function run() {
  await inspectTable('specialists');
  await inspectTable('partner_leads');
  await inspectTable('academy_registrations');
}

run().catch(console.error);
