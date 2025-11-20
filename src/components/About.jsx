function About() {
  return (
    <section id="about" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">About me</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I help people build sustainable wellness practices — grounded, practical, and kind. With a background in holistic health and movement, my approach blends science with nature, always starting from the roots.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            This space is intentionally calm and minimal — designed to let you breathe. Join a course or reach out, and let’s grow something healthy together.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 ring-1 ring-white shadow-inner" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-amber-300 to-rose-300 blur-xl opacity-50" />
        </div>
      </div>
    </section>
  );
}

export default About;