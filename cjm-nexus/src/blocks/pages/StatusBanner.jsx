import Reveal from '../../components/ui/Reveal';

/**
 * El estado del producto, dicho arriba y no escondido al final.
 *
 * KLINODA está en piloto y solo con datos ficticios. Hay dos formas de contar
 * eso y solo una funciona: enterrado en la última sección se lee como algo
 * que se intentó disimular; en la primera pantalla, con sus palabras exactas,
 * se lee como una firma que sabe lo que hace y no tiene prisa por cobrar.
 *
 * Es además el mejor argumento de la página. Casi nadie construye así, y
 * quien contrata software para un sector con normativa lo reconoce enseguida.
 *
 * NO ES UNA ALERTA Y NO SE PINTA COMO TAL: nada de amarillo ni de triángulos.
 * Es información sobre el producto, no una advertencia sobre un fallo.
 */
export default function StatusBanner({ content }) {
  return (
    <section className="container pb-[6vh]">
      <Reveal
        y={24}
        className="flex flex-col gap-3 rounded-xl3 border border-hairline bg-surface p-6 shadow-soft sm:flex-row sm:gap-6 sm:p-7"
      >
        <div className="flex flex-none items-center gap-2">
          <span aria-hidden="true" className="h-[10px] w-[10px] rounded-full bg-g-teal" />
          <h2 className="text-[.68rem] font-extrabold uppercase tracking-[.14em] text-ink-soft">
            {content.label}
          </h2>
        </div>
        <p className="max-w-[62ch] text-[.96rem] text-ink-soft">{content.text}</p>
      </Reveal>
    </section>
  );
}
