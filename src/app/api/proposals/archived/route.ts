import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase-server'

export async function GET() {
  const supabase = supabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json([])

  const { data, error } = await supabase
    .from('proposals')
    .select('*')
    .eq('freelancer_id', user.id)
    .eq('status', 'archived')
    .order('submitted_at', { ascending: false })

  if (error) return NextResponse.json([])
  return NextResponse.json(data ?? [])
}
