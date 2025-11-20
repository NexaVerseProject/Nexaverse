import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase-server'

export async function GET() {
  const supabase = supabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json([])

  const { data, error } = await supabase
    .from('interview_invites')
    .select('*')
    .eq('recipient_id', user.id)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json([])
  return NextResponse.json(data ?? [])
}
