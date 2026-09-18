/**
 * El estado del producto, dicho arriba y no escondido al final (regla 6 de
 * PRODUCT.md): un producto en piloto que lo anuncia en la primera pantalla se
 * lee como una firma seria.
 *
 * NO ES UNA ALERTA: nada de amarillo ni de triángulos. Un filete de cobre de
 * 2 px, la referencia y el texto. Dice el estado; no lista lo que falta.
 */
export default function StatusBanner({ content }) {
  return (
    <section className="registro estado-pag">
      <div className="marco">
        <div>
          <h2 className="ref-pag">{content.label}</h2>
          <p>{content.text}</p>
        </div>
      </div>
    </section>
  );
}
