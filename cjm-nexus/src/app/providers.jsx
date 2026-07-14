'use client';

/**
 * Providers — envoltura de contextos de cliente compartidos por toda la app:
 * i18n (sembrado por el idioma de la URL), configuración de animaciones que
 * respeta prefers-reduced-motion, y el tema claro/oscuro.
 */
import { MotionConfig } from 'framer-motion';

import I18nProvider from '../i18n/I18nProvider';
import { ThemeProvider } from '../hooks/useTheme';

export default function Providers({ lang, children }) {
  return (
    <I18nProvider lang={lang}>
      <MotionConfig reducedMotion="user">
        <ThemeProvider>{children}</ThemeProvider>
      </MotionConfig>
    </I18nProvider>
  );
}
