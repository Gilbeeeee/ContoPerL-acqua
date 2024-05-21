import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pbvfamphvydipqqyjzss.supabase.co'; // Incolla qui l'URL del progetto
const supabaseKey = process.env.SUPABASE_KEY; // Incolla qui la chiave API pubblica
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

