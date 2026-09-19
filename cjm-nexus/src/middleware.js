/**
 * Middleware — solo actúa sobre la raíz "/".
 *
 * «/» lleva SIEMPRE al idioma principal, el inglés (Boris, 2026-09-19: «quien
 * entra a cjmnexus.com a secas llega a /en»). Ya no se mira el idioma del
 * navegador: antes, un navegador en español caía en /es. Las URLs /es, /en y
 * /de son estáticas y no pasan por aquí; desde cualquiera de ellas el
 * selector de idioma lleva a las otras.
 */
import { NextResponse } from 'next/server';
import { defaultLanguage } from './i18n/settings';

export function middleware(request) {
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLanguage}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: '/',
};
