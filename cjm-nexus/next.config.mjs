/**
 * Configuración de Next.js — CJM Nexus.
 * App Router + generación estática (SSG). El contenido de cada idioma se
 * renderiza en el servidor, por lo que el HTML servido ya trae los textos.
 *
 * @type {import('next').NextConfig}
 */
import { KLINODA_WEB } from './src/lib/destinos.mjs';

const nextConfig = {
  reactStrictMode: true,
  // El lint se pasa aparte (`npm run lint`); un aviso no debe tumbar un despliegue.
  eslint: { ignoreDuringBuilds: true },

  // Cuando exista la web de KLINODA (`src/lib/destinos.mjs`), /klinoda en
  // cada idioma lleva allí. Temporal, para poder volver atrás sin que los
  // navegadores la recuerden.
  async redirects() {
    if (!KLINODA_WEB) return [];
    return [{ source: '/:lang(es|en|de)/klinoda', destination: KLINODA_WEB, permanent: false }];
  },
};

// Redeploy de producción tras corregir el Root Directory (cjm-nexus).

export default nextConfig;
