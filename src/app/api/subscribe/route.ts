import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, role } = body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Here you can integrate Supabase, PostgreSQL, Resend, or Mailchimp
    // e.g.: await supabase.from('waitlist').insert({ email, role, created_at: new Date() })

    return NextResponse.json({
      success: true,
      message: 'Successfully registered for early access.',
      data: {
        email,
        role: role || 'buyer',
        timestamp: new Date().toISOString(),
      },
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Server error processing waitlist request.' },
      { status: 500 }
    );
  }
}
