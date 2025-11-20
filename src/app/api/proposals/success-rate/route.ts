import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase-server'

export async function GET() {
  const supabase = supabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ rate: '0%' })

  // Define success rate as accepted proposals / total (active + archived)
  const [{ data: accepted }, { data: total }] = await Promise.all([
    supabase.from('proposals').select('id', { count: 'exact', head: true }).eq('freelancer_id', user.id).eq('status', 'accepted'),
    supabase.from('proposals').select('id', { count: 'exact', head: true }).eq('freelancer_id', user.id)
  ])

  const a = (accepted as any)?.length ?? 0
  const t = (total as any)?.length ?? 0
  const rate = t > 0 ? Math.round((a / t) * 100) + '%' : '0%'
  return NextResponse.json({ rate })
}
