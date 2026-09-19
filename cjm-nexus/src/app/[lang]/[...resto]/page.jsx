/**
 * Cualquier ruta que no exista bajo un idioma: responde 404 con la página
 * propia (`../not-found.jsx`) en lugar de la de Next, en inglés y sin diseño.
 * Es la única ruta que no es estática: no se puede generar lo que no existe.
 */
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export default function Resto() {
  notFound();
}
