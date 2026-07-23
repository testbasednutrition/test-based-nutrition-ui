import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yfnwzfznjrwqxujssesx.supabase.co';
const supabaseAnonKey = 'sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  const { data, error } = await supabase
    .from('partner_leads')
    .insert([{
      name: 'Test Schema Query',
      email: 'test@schema.com',
      mobile: '123',
      lead_type: 'Test',
      source_page: 'Test Page',
      created_at: new Date().toISOString()
    }])
    .select();
  
  if (error) {
    console.error("Insert error:", error);
  } else {
    console.log("Success! Columns in partner_leads:", Object.keys(data[0] || {}));
    // Clean up
    await supabase.from('partner_leads').delete().eq('id', data[0].id);
  }
}

run();
