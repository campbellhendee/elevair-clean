import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.elevair.org'
  return [
    { url: `${base}/` },
    { url: `${base}/services` },
    { url: `${base}/process` },
    { url: `${base}/results` },
    { url: `${base}/pricing` },
    { url: `${base}/faq` },
    { url: `${base}/about` },
    { url: `${base}/book` },
    { url: `${base}/contact` },
    { url: `${base}/privacy` },
    { url: `${base}/terms` },
  ]
}