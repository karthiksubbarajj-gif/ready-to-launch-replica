function PageHero({ eyebrow, title, highlight, description }) {
  return <section className="relative overflow-hidden border-b border-border/40 bg-grid-faint">
      <div className="container-page py-16 md:py-24 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange uppercase">{eyebrow}</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05]">
          {title} {highlight && <span className="text-orange">{highlight}</span>}
        </h1>
        {description && <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">{description}</p>}
      </div>
    </section>;
}
export {
  PageHero
};
