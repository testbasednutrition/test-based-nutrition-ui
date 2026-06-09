import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://yfnwzfznjrwqxujssesx.supabase.co";
const supabaseAnonKey = "sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
  const { data, error } = await supabase
    .from('specialists')
    .select('first_name, last_name, primary_testing_methods, is_approved');

  if (error) {
    console.error("Error fetching specialists:", error.message);
    return;
  }

  console.log("Approved Specialists testing methods:");
  data.filter(s => s.is_approved).forEach(s => {
    console.log(`${s.first_name} ${s.last_name}:`, s.primary_testing_methods);
  });
}

check();
