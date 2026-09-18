/**
 * Configuración de Next.js — CJM Nexus.
 * App Router + generación estática (SSG). El contenido de cada idioma se
 * renderiza en el servidor, por lo que el HTML servido ya trae los textos.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // El lint se pasa aparte (`npm run lint`); un aviso no debe tumbar un despliegue.
  eslint: { ignoreDuringBuilds: true },
};

// Redeploy de producción tras corregir el Root Directory (cjm-nexus).

export default nextConfig;
