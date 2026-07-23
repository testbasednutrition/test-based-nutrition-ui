import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yfnwzfznjrwqxujssesx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmbnd6ZnpuanJ3cXh1anNzZXN4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjYyMTIyMywiZXhwIjoyMDg4MTk3MjIzfQ.y0iqZPdcCgBYdNwfcrMxXMWvCBOEBzxBaIapz-aNkPM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log("Running detailed database insert check...");
  const dummyData = {
    clinic_name: "Check Clinic",
    contact_name: "Check Contact",
    email: "check@clinic.com"
  };

  const { data, error } = await supabase.from('partner_onboarding').insert([dummyData]);
  if (error) {
    console.error("Database Insert Error Details:", error);
  } else {
    console.log("Database insert succeeded for minimal columns!");
    
    // Now let's try a full insertion to verify all new fields
    const fullData = {
      clinic_name: "Full Verification Clinic",
      contact_name: "Sarah Jenkins",
      email: "sarah@jenkins.com",
      role_profession: "Nutritionist",
      phone: "123456",
      business_address: "742 Evergreen Terrace",
      website: "https://jenkinswellness.com",
      booking_link: "https://booking.jenkinswellness.com",
      location_served: "London",
      work_style: ["In clinic", "Online"],
      
      business_type: "Private clinic",
      services_offered: "Nutrition therapy",
      bestselling_treatments: "Hormone balancing",
      tbn_integration_pathways: ["Women's health", "Perimenopause / menopause"],
      known_for_area: "Menopause support",
      
      social_links: { facebook: "facebook.com/jenkins", instagram: "@jenkins" },
      posting_frequency: "Weekly",
      works_with_agency: false,
      agency_name: "",
      
      priorities_1to1: ["Understand how TBN fits into my clinic", "Launch or optimise my microsite"],
      help_needed_1to1: "Launch campaign planning",
      
      has_ideal_customers: "Yes",
      potential_customers: ["Customer Type A", "Customer Type B"],
      ideal_for_omega: "Jane Doe",
      ideal_for_gut: "John Smith",
      ideal_for_poc: "Bob Johnson",
      ideal_for_120day: "Alice Williams",
      ideal_for_casestudy: "Charlie Brown",
      
      crm_system: "Cliniko",
      has_consultation_process: true,
      use_tbn_consultation: "Yes",
      integration_preference: "Use TBN booking system & consultation form",
      
      testing_routes_purchased: ["Omega Balance Testing", "Gut Health Testing"],
      marketing_support_pathways: ["Women's health", "Perimenopause / menopause"],
      
      growth_routes_interest: ["Monthly subscriptions", "Test sales"],
      
      local_hubs_interest: "Yes",
      local_venues_list: ["Local Gym A", "Local Gym B"],
      approach_partners_interest: "Yes",
      approach_partners_list: ["Practitioner X", "Practitioner Y"],
      wants_approach_support: "Yes",
      
      wants_integrate_programmes: "Yes",
      programme_event_routes: ["1:1 programme", "Monthly workshop"],
      first_programme_choice: "Omega Balance 120-day programme",
      has_launch_idea: "Maybe",
      launch_idea_details: "To discuss during 1:1",
      
      marketing_help_topics: ["What to post", "Launch campaign", "Canva assets"],
      additional_paid_marketing: "Maybe",
      
      listing_form_completed: true,
      completed_at: new Date().toISOString()
    };
    
    const { data: fullResponse, error: fullError } = await supabase.from('partner_onboarding').insert([fullData]);
    if (fullError) {
      console.error("Database Full Insert Error Details:", fullError);
    } else {
      console.log("Full database insert succeeded!");
    }
  }
}

main();
