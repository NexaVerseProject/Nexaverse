import { supabaseServer } from "@/lib/supabase-server";

// Adapter to match example import usage: createClient()
export function createClient() {
    return supabaseServer();
}


