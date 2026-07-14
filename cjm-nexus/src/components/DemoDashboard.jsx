'use client';

/**
 * <DemoDashboard /> — dashboard gerencial de demostración (hero).
 *
 * Contiene: KPIs con contadores animados (Ventas $1.2M +12%, Margen 34%,
 * Caja 45 días), flujo de caja proyectado (área), rentabilidad por línea de
 * negocio (barras horizontales), progreso del plan anual (65%) y una alerta
 * ejecutiva. Datos de ejemplo, no reales.
 *
 * Decisiones de estilo (guía dataviz):
 * - Serie única → un solo tono por modo, VALIDADO contra cada superficie
 *   (claro #4F46E5 · oscuro #6E72DC; el lavanda puro falla en navy).
 * - Grid hairline sólido y recesivo; barras con extremo redondeado 4px y
 *   base recta; relleno de área como "lavado" de baja opacidad.
 * - Los textos y valores usan tinta (tokens de texto), nunca el color de la
 *   serie; la identidad la da el swatch del tooltip.
 * - Pista del progreso = paso claro del mismo tono (regla de meters).
 * - Alerta = color de estado + icono + etiqueta (nunca solo color).
 */
import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import AnimatedCounter from './AnimatedCounter';
import { AlertTriangleIcon } from './icons';
import useTheme from '../hooks/useTheme';
import { EASE, fadeUp, stagger } from '../lib/motion';

/* ---------------- Datos de ejemplo ---------------- */

/** Flujo de caja proyectado, k$ por mes */
const CASHFLOW = [64, 58, 71, 66, 82, 78, 94, 105, 118];

/** Margen % por línea de negocio (nombres traducidos vía locales) */
const PROFIT = [
  { key: 'a', value: 42 },
  { key: 'b', value: 34 },
  { key: 'c', value: 27 },
  { key: 'd', value: 21 },
];

/** Colores de serie validados por modo (script validate_palette de dataviz) */
const SERIES_LIGHT = '#4F46E5';
const SERIES_DARK = '#6E72DC';

/** "ene." → "Ene" (Intl devuelve minúsculas/punto según idioma) */
const capitalize = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1).replace(/\.$/, '') : s);

export default function DemoDashboard() {
  const { t, i18n } = useTranslation();
  const { isDark } = useTheme();
  const reduce = useReducedMotion();

  /* Tokens de gráfico dependientes del tema */
  const series = isDark ? SERIES_DARK : SERIES_LIGHT;
  const tick = { fill: isDark ? 'rgba(245,246,250,0.55)' : '#666D93', fontSize: 11 };
  const grid = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(30,35,64,0.08)';
  const ring = isDark ? '#121D4F' : '#FFFFFF'; // anillo del punto activo = superficie

  /* Meses abreviados en el idioma activo (Intl → sin claves de traducción) */
  const cashData = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(i18n.resolvedLanguage, { month: 'short' });
    return CASHFLOW.map((v, i) => ({ m: capitalize(fmt.format(new Date(2000, i, 1))), v }));
  }, [i18n.resolvedLanguage]);

  const profitData = useMemo(
    () => PROFIT.map((p) => ({ ...p, name: t(`hero.dash.lines.${p.key}`) })),
    [t]
  );

  /* Formateador "1.2" / "1,2" según idioma para el KPI de ventas */
  const nf1 = useMemo(
    () =>
      new Intl.NumberFormat(i18n.resolvedLanguage, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }),
    [i18n.resolvedLanguage]
  );

  return (
    <motion.div
      variants={stagger(0.09, 0.5)}
      initial="hidden"
      animate="show"
      className="relative mx-auto w-full max-w-xl rounded-3xl border border-white/70 bg-white/80 p-4 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-navy-light/70 dark:shadow-card-dark sm:p-5 md:p-6"
    >
      {/* ---------- Cabecera: título + indicador "en vivo" ---------- */}
      <motion.div variants={fadeUp} className="flex items-center justify-between gap-3">
        <p className="font-display text-sm font-semibold text-slate dark:text-smoke">
          {t('hero.dash.title')}
        </p>
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-muted dark:text-smoke/60">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t('hero.dash.live')}
        </span>
      </motion.div>

      {/* ---------- KPIs con contadores animados ---------- */}
      <motion.div variants={fadeUp} className="mt-4 grid grid-cols-3 gap-2.5 md:gap-3">
        {/* Ventas → cuenta hasta $1.2M + delta positivo */}
        <div className="rounded-2xl border border-softblue/70 bg-smoke/80 p-3 dark:border-white/10 dark:bg-white/5 md:p-3.5">
          <p className="truncate text-[11px] font-medium text-slate-muted dark:text-smoke/50">
            {t('hero.dash.kpiSales')}
          </p>
          <p className="mt-1 text-lg font-semibold text-slate dark:text-smoke md:text-2xl">
            <AnimatedCounter to={1.2} duration={1.8} delay={0.6} format={(v) => `$${nf1.format(v)}M`} />
          </p>
          <span className="mt-1.5 inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
            <span aria-hidden="true">▲</span> {t('hero.dash.salesDelta')}
          </span>
        </div>

        {/* Margen 34% */}
        <div className="rounded-2xl border border-softblue/70 bg-smoke/80 p-3 dark:border-white/10 dark:bg-white/5 md:p-3.5">
          <p className="truncate text-[11px] font-medium text-slate-muted dark:text-smoke/50">
            {t('hero.dash.kpiMargin')}
          </p>
          <p className="mt-1 text-lg font-semibold text-slate dark:text-smoke md:text-2xl">
            <AnimatedCounter to={34} duration={1.6} delay={0.75} format={(v) => `${Math.round(v)}%`} />
          </p>
        </div>

        {/* Caja 45 días */}
        <div className="rounded-2xl border border-softblue/70 bg-smoke/80 p-3 dark:border-white/10 dark:bg-white/5 md:p-3.5">
          <p className="truncate text-[11px] font-medium text-slate-muted dark:text-smoke/50">
            {t('hero.dash.kpiCash')}
          </p>
          <p className="mt-1 text-lg font-semibold text-slate dark:text-smoke md:text-2xl">
            <AnimatedCounter to={45} duration={1.6} delay={0.9} format={(v) => `${Math.round(v)}`} />{' '}
            <span className="text-sm font-medium text-slate-muted dark:text-smoke/50">
              {t('hero.dash.cashUnit')}
            </span>
          </p>
        </div>
      </motion.div>

      {/* ---------- Flujo de caja proyectado (área) ---------- */}
      <motion.div
        variants={fadeUp}
        className="mt-2.5 rounded-2xl border border-softblue/70 bg-smoke/80 p-3.5 dark:border-white/10 dark:bg-white/5 md:mt-3 md:p-4"
      >
        <p className="text-[11px] font-medium text-slate-muted dark:text-smoke/50">
          {t('hero.dash.cashflowTitle')}
        </p>
        <div className="mt-2 h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={cashData} margin={{ top: 4, right: 6, left: 6, bottom: 0 }}>
              <defs>
                {/* Lavado de baja opacidad de la propia serie */}
                <linearGradient id="cjm-cash-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={series} stopOpacity={0.22} />
                  <stop offset="100%" stopColor={series} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke={grid} strokeWidth={1} />
              <XAxis dataKey="m" tickLine={false} axisLine={false} tick={tick} dy={6} />
              <YAxis hide domain={['dataMin - 18', 'dataMax + 14']} />
              <Tooltip
                content={<ChartTooltip formatter={(v) => `$${v}k`} seriesColor={series} />}
                cursor={{ stroke: grid, strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="v"
                name={t('hero.dash.cashflowSeries')}
                stroke={series}
                strokeWidth={2}
                fill="url(#cjm-cash-fill)"
                dot={false}
                activeDot={{ r: 4, strokeWidth: 2, stroke: ring }}
                isAnimationActive={!reduce}
                animationDuration={1300}
                animationBegin={800}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* ---------- Rentabilidad por línea + progreso + alerta ---------- */}
      <motion.div variants={fadeUp} className="mt-2.5 grid gap-2.5 sm:grid-cols-2 md:mt-3 md:gap-3">
        {/* Barras horizontales: mismo tono, etiqueta directa al final */}
        <div className="rounded-2xl border border-softblue/70 bg-smoke/80 p-3.5 dark:border-white/10 dark:bg-white/5 md:p-4">
          <p className="text-[11px] font-medium text-slate-muted dark:text-smoke/50">
            {t('hero.dash.profitTitle')}
          </p>
          <div className="mt-2 h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={profitData}
                layout="vertical"
                margin={{ top: 2, right: 32, left: 0, bottom: 2 }}
                barCategoryGap="28%"
              >
                <XAxis type="number" hide domain={[0, 48]} />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={86}
                  tickLine={false}
                  axisLine={false}
                  tick={{ ...tick, fontSize: 10.5 }}
                />
                <Tooltip
                  content={<ChartTooltip formatter={(v) => `${v}%`} seriesColor={series} />}
                  cursor={{ fill: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(30,35,64,0.04)' }}
                />
                <Bar
                  dataKey="value"
                  name={t('hero.dash.profitSeries')}
                  fill={series}
                  radius={[0, 4, 4, 0]}
                  barSize={12}
                  background={{
                    fill: isDark ? 'rgba(110,114,220,0.10)' : 'rgba(79,70,229,0.07)',
                    radius: [0, 4, 4, 0],
                  }}
                  isAnimationActive={!reduce}
                  animationDuration={1100}
                  animationBegin={1000}
                >
                  {/* Valor en tinta al final de la barra (nunca del color de la serie) */}
                  <LabelList
                    dataKey="value"
                    position="right"
                    formatter={(v) => `${v}%`}
                    fill={isDark ? 'rgba(245,246,250,0.75)' : '#3C4368'}
                    fontSize={10}
                    fontWeight={600}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 md:gap-3">
          {/* Progreso del plan anual → 65% */}
          <div className="rounded-2xl border border-softblue/70 bg-smoke/80 p-3.5 dark:border-white/10 dark:bg-white/5 md:p-4">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-[11px] font-medium text-slate-muted dark:text-smoke/50">
                {t('hero.dash.progressLabel')}
              </p>
              <p className="text-sm font-semibold text-slate dark:text-smoke">
                <AnimatedCounter to={65} duration={1.6} delay={1.1} format={(v) => `${Math.round(v)}%`} />
              </p>
            </div>
            {/* Pista = paso claro del mismo tono (regla de meters de dataviz) */}
            <div data-progress className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-indigo/10 dark:bg-lavender/15">
              <motion.div
                className="h-full rounded-full bg-nexus-gradient"
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1.6, delay: 1.15, ease: EASE }}
              />
            </div>
          </div>

          {/* Alerta ejecutiva (warning: icono + etiqueta + texto) */}
          <div className="flex flex-1 items-start gap-2.5 rounded-2xl border border-amber-400/40 bg-amber-400/10 p-3.5 md:p-4">
            <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
            <div className="text-xs leading-relaxed">
              <p className="font-bold text-amber-600 dark:text-amber-400">{t('hero.dash.alertTitle')}</p>
              <p className="mt-0.5 text-slate-light dark:text-smoke/70">{t('hero.dash.alertText')}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ---------- Nota de honestidad: datos de ejemplo ---------- */}
      <motion.p
        variants={fadeUp}
        className="mt-2.5 text-right text-[10px] font-medium text-slate-muted dark:text-smoke/55"
      >
        {t('hero.dash.demoNote')}
      </motion.p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/** Tooltip propio: tarjeta pequeña con valor en tinta + swatch de serie */
function ChartTooltip({ active, payload, label, formatter, seriesColor }) {
  if (!active || !payload?.length) return null;
  const p = payload[0];

  return (
    <div className="rounded-xl border border-softblue bg-white/95 px-3 py-2 text-xs shadow-card dark:border-white/10 dark:bg-navy-light/95">
      <p className="font-semibold text-slate dark:text-smoke">{label ?? p.payload?.name}</p>
      <p className="mt-0.5 flex items-center gap-1.5 text-slate-muted dark:text-smoke/60">
        <span
          className="inline-block h-2 w-2 shrink-0 rounded-full"
          style={{ backgroundColor: seriesColor }}
          aria-hidden="true"
        />
        {p.name}:{' '}
        <span className="font-semibold text-slate dark:text-smoke">
          {formatter ? formatter(p.value) : p.value}
        </span>
      </p>
    </div>
  );
}
