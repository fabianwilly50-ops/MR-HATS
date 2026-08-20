import { createClient } from '@supabase/supabase-js';

// Mismo proyecto Supabase que ya usa MRHatsApp (RN) — mismas tablas, mismas
// RLS, misma anon key pública. No se crea nada nuevo en Supabase para la web.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabase = createClient(url, anonKey);
