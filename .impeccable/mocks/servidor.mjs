// servidor.mjs — node servidor.mjs <carpeta> [puerto]
// Servidor estático para las maquetas, con peticiones por rangos de bytes
// (206 Partial Content). Sin rangos el navegador no puede saltar dentro del
// vídeo de la portada: `python -m http.server` no sirve. Ver PLAN.md.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const RAIZ = path.resolve(process.argv[2]);
const PUERTO = +(process.env.PORT || process.argv[3] || 8779);
const TIPOS = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.webm': 'video/webm', '.svg': 'image/svg+xml' };
http.createServer((req, res) => {
  const ruta = decodeURIComponent(req.url.split('?')[0]);
  const archivo = path.resolve(path.join(RAIZ, ruta === '/' ? 'C-fusion.html' : ruta));
  if (!archivo.startsWith(RAIZ)) { res.writeHead(403); return res.end(); }
  fs.stat(archivo, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('404'); }
    const tipo = TIPOS[path.extname(archivo).toLowerCase()] || 'application/octet-stream';
    const base = { 'Content-Type': tipo, 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-cache' };
    const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '');
    if (!m) { res.writeHead(200, { ...base, 'Content-Length': st.size }); return fs.createReadStream(archivo).pipe(res); }
    let ini, fin;
    if (m[1] === '') { ini = Math.max(0, st.size - Number(m[2])); fin = st.size - 1; }
    else { ini = Number(m[1]); fin = m[2] === '' ? st.size - 1 : Math.min(Number(m[2]), st.size - 1); }
    if (ini > fin || ini >= st.size) { res.writeHead(416, { 'Content-Range': `bytes */${st.size}` }); return res.end(); }
    res.writeHead(206, { ...base, 'Content-Length': fin - ini + 1, 'Content-Range': `bytes ${ini}-${fin}/${st.size}` });
    fs.createReadStream(archivo, { start: ini, end: fin }).pipe(res);
  });
}).listen(PUERTO, '127.0.0.1', () => console.log(`sirviendo ${RAIZ} en http://localhost:${PUERTO}`));
