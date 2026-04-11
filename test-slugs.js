const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://yfnwzfznjrwqxujssesx.supabase.co', 'sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY');
async function run() {
  const { data } = await supabase.from('specialists').select('*');
  const alex = data.find(p => p.first_name?.includes('Alex'));
  console.log("Alex Name:", `"${alex.first_name}"`, `"${alex.last_name}"`, `"${alex.clinic_name}"`);
  const uiSlug = `${alex.first_name || alex.clinic_name || 'partner'}-${alex.last_name || ''}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  console.log("UI API SLUG:", uiSlug);
  const portalSlug = `${alex.first_name || alex.clinic_name || 'partner'}-${alex.last_name || ''}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+|-+$)/g, '');
  console.log("PORTAL SLUG:", portalSlug);
}
run();
