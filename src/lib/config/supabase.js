import { createClient } from '@supabase/supabase-js';
import variables from '$lib/config/variables.js';

const { supabaseAnonKey, supabaseUrl } = variables;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
