import { supabaseBrowser } from "@/lib/supabase";

// Adapter to match example import usage: createClient()
export function createClient() {
    return supabaseBrowser();
}


