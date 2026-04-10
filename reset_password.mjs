import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yfnwzfznjrwqxujssesx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmbnd6ZnpuanJ3cXh1anNzZXN4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjYyMTIyMywiZXhwIjoyMDg4MTk3MjIzfQ.y0iqZPdcCgBYdNwfcrMxXMWvCBOEBzxBaIapz-aNkPM'

const supabase = createClient(supabaseUrl, supabaseKey)

async function resetPassword() {
  const { data, error } = await supabase.auth.admin.updateUserById(
    // We need the user ID. Let's find it first.
    '', {}
  );
}

async function main() {
  const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
  const user = users.find(u => u.email === 'thinkjsk@gmail.com');
  
  if (user) {
    const { data, error } = await supabase.auth.admin.updateUserById(
      user.id,
      { password: 'password123', email_confirm: true }
    );
    if (error) console.error("Error resetting:", error.message);
    else console.log("Successfully reset password strictly to password123!");
  }
}
main();
