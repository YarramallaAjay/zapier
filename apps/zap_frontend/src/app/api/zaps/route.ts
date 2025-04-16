import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const { name, trigger, actions, status, runCount } = body;

    if (!name || !trigger || !actions || !Array.isArray(actions)) {
      return new NextResponse('Invalid request body', { status: 400 });
    }

    // TODO: Add validation for trigger and actions
    // TODO: Save to database

    return NextResponse.json({
      id: 'temp-id',
      name,
      trigger,
      actions,
      status: status || 'active',
      runCount: runCount || 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error creating Zap:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 