import { SITE_URL } from '@/constants/site'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  const staticRoutes = [
    '',
    '/story',
    '/knowledge',
    '/faq',
    '/distributors',
    '/products',
    '/products/gel-venus-y-passion',
    '/products/zone-fresh-mousse',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [
    ...staticRoutes,
  ]
}
