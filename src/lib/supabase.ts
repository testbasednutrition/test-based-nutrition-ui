import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yfnwzfznjrwqxujssesx.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_zAV7rgojrLV0GYeGUgqIWw_aKVsXwcY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
