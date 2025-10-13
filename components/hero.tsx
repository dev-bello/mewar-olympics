export function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/school-team.jpg')`,
          filter: "brightness(0.4)",
        }}
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-balance">
          MEWAR OLYMPICS
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Sports Week 2025
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#sports"
            className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            SPORTS
          </a>
          <a
            href="#teams"
            className="px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/80 transition-colors border border-border"
          >
            TEAMS
          </a>
        </div>
      </div>
    </section>
  );
}
