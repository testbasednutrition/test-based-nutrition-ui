import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yfnwzfznjrwqxujssesx.supabase.co';
const supabaseAnonKey = 'sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  console.log("Fetching sample data from specialists...");
  const { data: specialists, error: specErr } = await supabase
    .from('specialists')
    .select('*')
    .limit(1);
  if (specErr) console.error("specialists error:", specErr);
  else console.log("specialists columns:", Object.keys(specialists[0] || {}));

  console.log("Fetching sample data from partner_leads...");
  const { data: partnerLeads, error: leadsErr } = await supabase
    .from('partner_leads')
    .select('*')
    .limit(1);
  if (leadsErr) console.error("partner_leads error:", leadsErr);
  else console.log("partner_leads columns:", Object.keys(partnerLeads[0] || {}));

  console.log("Fetching sample data from academy_registrations...");
  const { data: academyRegs, error: academyErr } = await supabase
    .from('academy_registrations')
    .select('*')
    .limit(1);
  if (academyErr) console.error("academy_registrations error:", academyErr);
  else console.log("academy_registrations columns:", Object.keys(academyRegs[0] || {}));

  console.log("Fetching sample data from profiles...");
  const { data: profiles, error: profErr } = await supabase
    .from('profiles')
    .select('*')
    .limit(1);
  if (profErr) console.error("profiles error:", profErr);
  else console.log("profiles columns:", Object.keys(profiles[0] || {}));
}

run();
