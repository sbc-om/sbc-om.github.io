const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://sbc-om.github.io/sitemap.xml

# Block access to sensitive areas
Disallow: /api/
Disallow: /.env
Disallow: /node_modules/
`;

export function GET() {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
