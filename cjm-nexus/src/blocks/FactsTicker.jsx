import Ticker from '../components/ui/Ticker';

/**
 * Cinta de hechos, justo debajo de la portada.
 *
 * Va aquí a propósito: son las razones para creer, y llegan ANTES de que se
 * pida nada. Cada frase tiene que poder responder «¿dónde está eso?»; las
 * que no lo hacían —«clientes a nivel mundial», «tres regiones»— se retiraron
 * en el rediseño.
 */
export default function FactsTicker({ items }) {
  return <Ticker items={items} />;
}
