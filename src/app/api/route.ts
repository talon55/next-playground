import 'server-only'
import { type NextRequest } from 'next/server'
import mockServer from '../lib/mock-server';

export async function GET(request: NextRequest) {
    const data = mockServer();
    console.log(`hit the request! data: ${JSON.stringify(data)}`);
    return Response.json({ data });
}
