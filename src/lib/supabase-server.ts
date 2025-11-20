import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/headers'

export function supabaseServer() {
  const cookieStore = cookies()
  
  return createRouteHandlerClient({ cookies: () => cookieStore })
}
