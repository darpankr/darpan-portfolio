import { put, get } from '@vercel/blob';

export async function POST(request) {
  try {
    const { key, value, access = 'public' } = await request.json();
    // value can be a string (JSON, text, etc.)
    const { url } = await put(key, value, { access });
    return new Response(JSON.stringify({ success: true, url }), { status: 200 });
  } catch (error) {
    console.error('Blob POST error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    if (!key) {
      return new Response(JSON.stringify({ error: 'Missing key parameter' }), { status: 400 });
    }
    // Construct the public blob URL
    const blobUrl = `https://5umy2jrl7cnwxk4q.public.blob.vercel-storage.com/${key}`;
    const blobRes = await fetch(blobUrl);
    if (!blobRes.ok) {
      return new Response(JSON.stringify({ error: 'Blob not found' }), { status: 404 });
    }
    const value = await blobRes.text();
    return new Response(JSON.stringify({ value }), { status: 200 });
  } catch (error) {
    console.error('Blob GET error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}