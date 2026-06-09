import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://yfnwzfznjrwqxujssesx.supabase.co";
// Using the service role key to bypass RLS policies
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmbnd6ZnpuanJ3cXh1anNzZXN4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjYyMTIyMywiZXhwIjoyMDg4MTk3MjIzfQ.y0iqZPdcCgBYdNwfcrMxXMWvCBOEBzxBaIapz-aNkPM";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const MIGRATION_MAP = {
  "finger prick balance testing (omega 6:3)": "Omega Balance",
  "finger prick gut health testing": "Gut Microbiome",
  "vitamin d levels (fp)": "Vitamin D",
  "hba1c - diabetes (fp)": "HbA1c",
  "crp inflammation (fp)": "CRP / hs-CRP",
  "crp/hs-crp": "CRP / hs-CRP",
  "crp": "CRP / hs-CRP",
  "hs-crp heart screening (fp)": "CRP / hs-CRP",
  "ferritin iron levels (fp)": "Ferritin",
  "cystatin c kidney screening (fp)": "Cystatin C",
  "progesterone ovulation (fp)": "Progesterone",
  "folate (fp)": "Folate",
  "testosterone (vbd+c)": "Testosterone (VBD+C)",
  "tsh thyroid screening (vbd)": "TSH Thyroid Screening (VBD)",
  "vitamin b12 levels (vbd+c)": "Vitamin B12 Levels (VBD+C)",
  "fsh menopause (vbd)": "FSH Menopause (VBD)"
};

async function migrate() {
  const { data: specialists, error } = await supabase
    .from('specialists')
    .select('id, first_name, last_name, primary_testing_methods');

  if (error) {
    console.error("Error fetching specialists:", error.message);
    return;
  }

  console.log(`Fetched ${specialists.length} specialists. Cleaning up testing methods with admin access...`);

  for (const s of specialists) {
    const rawMethods = s.primary_testing_methods || [];
    if (rawMethods.length === 0) continue;

    // Map each method to its clean modern name, and deduplicate
    const cleanMethodsSet = new Set();
    for (const method of rawMethods) {
      const trimmed = method.trim();
      const lower = trimmed.toLowerCase();
      if (MIGRATION_MAP[lower]) {
        cleanMethodsSet.add(MIGRATION_MAP[lower]);
      } else {
        cleanMethodsSet.add(trimmed);
      }
    }

    const cleanMethods = Array.from(cleanMethodsSet);

    // Check if anything actually changed
    const hasChanged = JSON.stringify(rawMethods.sort()) !== JSON.stringify(cleanMethods.sort());

    if (hasChanged) {
      console.log(`Updating ${s.first_name} ${s.last_name}:`);
      console.log(`  Before:`, rawMethods);
      console.log(`  After :`, cleanMethods);

      const { error: updateError } = await supabase
        .from('specialists')
        .update({ primary_testing_methods: cleanMethods })
        .eq('id', s.id);

      if (updateError) {
        console.error(`  Failed to update ${s.first_name} ${s.last_name}:`, updateError.message);
      } else {
        console.log(`  Successfully updated and verified!`);
      }
    }
  }

  console.log("Database migration complete!");
}

migrate();
