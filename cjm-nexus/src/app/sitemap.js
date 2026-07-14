/**
 * Genera /sitemap.xml — CJM Nexus.
 * Una entrada por URL real (idioma), cada una con sus alternativas hreflang.
 */
import { SITE_URL } from '../lib/site';
import { defaultLanguage, languages } from '../i18n/settings';

export default function sitemap() {
  const lastModified = new Date();
  const alternates = {
    languages: Object.fromEntries(languages.map((l) => [l, `${SITE_URL}/${l}`])),
  };

  return languages.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: lang === defaultLanguage ? 1 : 0.8,
    alternates,
  }));
}
