/**
 * POST /api/brochure — notificación de descarga de brochure.
 *
 * Recibe { email, lang }, valida el correo y NOS AVISA POR EMAIL (a
 * experiencia@cjmnexus.com) de cada descarga, incluyendo el correo del
 * visitante y el idioma. Después el cliente entrega el PDF.
 *
 * El envío usa SMTP vía nodemailer con variables de entorno (ver .env.example):
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, [SMTP_FROM], [BROCHURE_NOTIFY_TO]
 *
 * Prioridad: NO bloquear la descarga del visitante si el correo falla. Si el
 * SMTP no está configurado o el envío falla, se registra en el log del servidor
 * y se responde OK igualmente (el visitante recibe su PDF).
 */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// nodemailer requiere runtime de Node (no Edge)
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_TO = process.env.BROCHURE_NOTIFY_TO || 'experiencia@cjmnexus.com';
const LANG_NAMES = { es: 'Español', en: 'Inglés', de: 'Alemán' };

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  const email = String(body?.email ?? '').trim();
  const lang = ['es', 'en', 'de'].includes(body?.lang) ? body.lang : 'es';

  // Validación de formato en servidor (además de la del cliente)
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 });
  }

  try {
    await sendNotification({ email, lang });
  } catch (err) {
    // No bloqueamos la entrega del PDF por un fallo de correo; solo lo registramos.
    console.error('[brochure] no se pudo enviar la notificación:', err?.message || err);
  }

  return NextResponse.json({ ok: true });
}

async function sendNotification({ email, lang }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  // Sin SMTP configurado (p. ej. en desarrollo): registrar el lead y salir.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(`[brochure] SMTP no configurado. Lead: ${email} · idioma: ${lang}`);
    return;
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // SSL en 465; STARTTLS en 587
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const langName = LANG_NAMES[lang] || lang;
  const when = new Date().toISOString();

  await transporter.sendMail({
    from: SMTP_FROM || `CJM Nexus Web <${SMTP_USER}>`,
    to: NOTIFY_TO,
    replyTo: email,
    subject: `Nueva descarga de brochure — ${email}`,
    text:
      `Alguien descargó el brochure de CJM Nexus.\n\n` +
      `Correo del visitante: ${email}\n` +
      `Idioma: ${langName} (${lang})\n` +
      `Fecha (UTC): ${when}\n`,
    html:
      `<h2 style="margin:0 0 12px;font-family:Arial,sans-serif;color:#1E2340">Nueva descarga de brochure</h2>` +
      `<table style="font-family:Arial,sans-serif;color:#3C4368;font-size:14px;border-collapse:collapse">` +
      `<tr><td style="padding:4px 12px 4px 0"><strong>Correo del visitante</strong></td><td style="padding:4px 0"><a href="mailto:${email}">${email}</a></td></tr>` +
      `<tr><td style="padding:4px 12px 4px 0"><strong>Idioma</strong></td><td style="padding:4px 0">${langName} (${lang})</td></tr>` +
      `<tr><td style="padding:4px 12px 4px 0"><strong>Fecha (UTC)</strong></td><td style="padding:4px 0">${when}</td></tr>` +
      `</table>`,
  });
}
