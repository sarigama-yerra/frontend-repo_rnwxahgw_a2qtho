import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Contact />
        <footer className="border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-600 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Roots Health</span>
            <a href="#top" className="hover:text-slate-900">Back to top</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;