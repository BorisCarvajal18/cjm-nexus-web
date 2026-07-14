'use client';

/**
 * <I18nProvider /> — puente react-i18next para el árbol cliente.
 *
 * Clave para el SEO: la instancia se inicializa de forma SÍNCRONA
 * (initImmediate: false) con los recursos ya incluidos y con `lng` fijado
 * desde la URL. Así, durante el renderizado en servidor, `t()` ya devuelve
 * los textos del idioma correcto y el HTML servido sale traducido.
 *
 * Al navegar entre idiomas en cliente (/es → /en) cambia la prop `lang`:
 * se mantiene la misma instancia y solo se cambia el idioma activo, de modo
 * que todos los textos se actualizan sin recargar la página.
 */
import { useEffect, useState } from 'react';
import { createInstance } from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import es from '../locales/es.json';
import en from '../locales/en.json';
import de from '../locales/de.json';
import { defaultLanguage, languages } from './settings';

function createI18n(lang) {
  const instance = createInstance();
  instance.use(initReactI18next).init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      de: { translation: de },
    },
    lng: lang,
    fallbackLng: defaultLanguage,
    supportedLngs: languages,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initImmediate: false, // init síncrono → t() listo para el render en servidor
  });
  return instance;
}

export default function I18nProvider({ lang, children }) {
  const [i18n] = useState(() => createI18n(lang));

  useEffect(() => {
    if (i18n.resolvedLanguage !== lang) i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
