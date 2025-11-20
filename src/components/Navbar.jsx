import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : "bg-transparent"
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div onClick={() => scrollTo("top")} className="flex items-center gap-2 cursor-pointer select-none">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 shadow ring-1 ring-white/30" />
          <span className="font-semibold tracking-tight text-slate-800">Roots Health</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <button onClick={() => scrollTo("about")} className="hover:text-slate-900 transition-colors">About</button>
          <button onClick={() => scrollTo("courses")} className="hover:text-slate-900 transition-colors">Courses</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-slate-900 transition-colors">Contact</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;