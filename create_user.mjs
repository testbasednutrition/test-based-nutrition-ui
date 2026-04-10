import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yfnwzfznjrwqxujssesx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmbnd6ZnpuanJ3cXh1anNzZXN4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjYyMTIyMywiZXhwIjoyMDg4MTk3MjIzfQ.y0iqZPdcCgBYdNwfcrMxXMWvCBOEBzxBaIapz-aNkPM'

const supabase = createClient(supabaseUrl, supabaseKey)

async function main() {
  const { data, error } = await supabase.auth.admin.createUser({
    email: 'thinkjsk@gmail.com',
    password: 'password123',
    email_confirm: true
  })
  
  if (error) {
    if (error.message.includes('already exists')) {
        console.log('User already exists!')
    } else {
        console.error('Error creating user:', error)
    }
  } else {
    console.log('Successfully created user:', data.user.email)
  }
}

main()
