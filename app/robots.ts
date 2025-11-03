export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://www.elevair.org/sitemap.xml',
  }
}