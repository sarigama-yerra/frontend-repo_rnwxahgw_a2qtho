function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-gradient-to-tr from-amber-200 via-orange-200 to-rose-200 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
            Grounded wellness from the roots up
          </h1>
          <p className="mt-6 text-lg text-slate-700">
            A calm, modern space for holistic health. Learn, grow, and reconnect with your roots through curated courses and gentle guidance.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#courses" className="px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">Explore courses</a>
            <a href="#contact" className="px-5 py-3 rounded-full bg-white/70 ring-1 ring-slate-200 hover:bg-white transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;