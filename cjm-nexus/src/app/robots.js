/**
 * Genera /robots.txt — CJM Nexus.
 * Permite el rastreo completo y referencia el sitemap.
 */
import { SITE_URL } from '../lib/site';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
