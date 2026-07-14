/**
 * Middleware — solo actúa sobre la raíz "/".
 * Redirige "/" al idioma preferido del navegador (Accept-Language) y, si no
 * hay coincidencia, al español por defecto. Las URLs /es, /en y /de son
 * estáticas y no pasan por aquí.
 */
import { NextResponse } from 'next/server';
import { defaultLanguage, languages } from './i18n/settings';

function pickLocale(acceptLanguage) {
  if (!acceptLanguage) return null;
  const requested = acceptLanguage.split(',').map((part) => part.split(';')[0].trim().toLowerCase());
  for (const tag of requested) {
    const base = tag.split('-')[0];
    if (languages.includes(base)) return base;
  }
  return null;
}

export function middleware(request) {
  const locale = pickLocale(request.headers.get('accept-language')) || defaultLanguage;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: '/',
};
