// pages/api/proxy.js
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const response = await axios.post(process.env.NEXT_PUBLIC_CASHFREE_URL!, reqBody, {
      headers: {
        'x-client-id': process.env.NEXT_PUBLIC_CASHFREE_CLIENT_ID,
        'x-client-secret': process.env.NEXT_PUBLIC_CASHFREE_CLIENT_SECRET,
        'x-api-version': process.env.NEXT_PUBLIC_CASHFREE_API_VERSION,
        'accept': 'application/json',
        'content-type': 'application/json',
      },
    });
    return NextResponse.json({ status: 'success', link_url: response.data.link_url });
  } catch (error: any) {
    return NextResponse.error();
  }
}
