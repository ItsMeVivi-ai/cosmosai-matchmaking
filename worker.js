export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    if (request.method === 'OPTIONS') return new Response(null, { headers });
    if (path === '/queue') {
      return new Response(JSON.stringify({ action: 'queue', position: Math.floor(Math.random() * 100), eta: 30 }), { headers });
    }
    if (path === '/health') {
      return new Response(JSON.stringify({ status: 'ok', agent: 'cosmosai-matchmaking', version: '1.0.0' }), { headers });
    }
    return new Response(JSON.stringify({ agent: 'cosmosai-matchmaking', endpoints: ['/queue', '/health'] }), { headers });
  }
};
