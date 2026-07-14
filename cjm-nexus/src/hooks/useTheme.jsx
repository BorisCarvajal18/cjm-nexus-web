'use client';

/**
 * Tema claro/oscuro de CJM Nexus — contexto global.
 *
 * Se expone como contexto (y no como estado local por componente) para que
 * TODOS los consumidores —toggle de la navbar, gráficos de Recharts, etc.—
 * se re-rendericen juntos al cambiar el tema.
 *
 * Por defecto la web abre en modo CLARO. La fuente de verdad inicial es la
 * clase 'dark' en <html>, que el script inline de index.html aplica ANTES
 * del primer render (sin flash) ÚNICAMENTE si el usuario eligió el modo
 * oscuro antes. La preferencia se persiste en localStorage al usar el toggle.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'cjm-theme';
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  // Sincroniza la clase 'dark' del documento con el estado de React
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
      } catch (e) {
        /* almacenamiento no disponible: el tema funciona igual, sin persistir */
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme debe usarse dentro de <ThemeProvider>');
  return ctx;
}
