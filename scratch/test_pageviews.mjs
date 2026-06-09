import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://yfnwzfznjrwqxujssesx.supabase.co";
const supabaseAnonKey = "sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY";
const serviceRoleKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmbnd6ZnpuanJ3cXh1anNzZXN4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjYyMTIyMywiZXhwIjoyMDg4MTk3MjIzfQ.y0iqZPdcCgBYdNwfcrMxXMWvCBOEBzxBaIapz-aNkPM";

async function runTest() {
  console.log("--- Supabase Telemetry Diagnostic ---");

  // 1. Test Anon Client (Simulate visitor site insert)
  const anonClient = createClient(supabaseUrl, supabaseAnonKey);
  
  const testPayload = {
    page_path: "/test-diagnostics-path",
    referrer: "Direct",
    device: "desktop",
    location: "Test Location, UK",
    visitor_id: "test-visitor-uuid-12345"
  };

  console.log("Testing Anon insert...");
  const { data: anonInsertData, error: anonInsertError } = await anonClient
    .from("page_views")
    .insert(testPayload)
    .select();

  if (anonInsertError) {
    console.error("❌ Anon insert failed:", anonInsertError.message, anonInsertError.code);
  } else {
    console.log("✅ Anon insert succeeded!", anonInsertData);
  }

  // 2. Test Admin Client Select (Simulate partner hub load)
  const adminClient = createClient(supabaseUrl, serviceRoleKey);
  console.log("\nTesting Admin select...");
  const { data: adminSelectData, error: adminSelectError } = await adminClient
    .from("page_views")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (adminSelectError) {
    console.error("❌ Admin select failed:", adminSelectError.message);
  } else {
    console.log(`✅ Admin select succeeded! Total views found: ${adminSelectData.length}`);
    adminSelectData.forEach((row, idx) => {
      console.log(`[${idx}] id=${row.id} path=${row.page_path} geo=${row.location} ref=${row.referrer} time=${row.created_at}`);
    });
  }

  // 3. Get exact count of page_views
  const { count, error: countError } = await adminClient
    .from("page_views")
    .select("*", { count: "exact", head: true });
  
  if (countError) {
    console.error("❌ Count failed:", countError.message);
  } else {
    console.log(`\nTotal rows in page_views table: ${count}`);
  }
}

runTest().catch(console.error);
