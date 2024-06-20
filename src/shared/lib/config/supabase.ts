import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = import.meta.env.VITE_PROJECT_URL ?? '';
const supabaseServerKey: string = import.meta.env.VITE_API_KEY ?? '';

export const supabase = createClient(supabaseUrl, supabaseServerKey);
