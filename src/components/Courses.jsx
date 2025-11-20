import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

function Courses() {
  const [courses, setCourses] = useState([
    { title: "Rooted Breath", description: "A gentle introduction to breathwork for balance and calm.", date: "Monthly", location: "Online", price: 49 },
    { title: "Ground & Grow", description: "Foundational movement practices to reconnect with your body.", date: "Quarterly", location: "Studio", price: 129 },
  ]);

  useEffect(() => {
    fetch(`${API_BASE}/api/courses`).then(async (res) => {
      if (!res.ok) return; // fallback to defaults
      const data = await res.json();
      if (Array.isArray(data) && data.length) setCourses(data);
    }).catch(() => {});
  }, []);

  return (
    <section id="courses" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-slate-900">Courses</h2>
          <p className="mt-3 text-slate-700">Warm, human-centered learning experiences designed to support your health journey.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((c, i) => (
            <div key={i} className="group rounded-3xl p-6 bg-white/70 backdrop-blur ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{c.title}</h3>
                <span className="text-sm text-slate-600">{c.date || "TBA"}</span>
              </div>
              <p className="mt-3 text-slate-700">{c.description}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
                <span>{c.location || "Online"}</span>
                {c.price != null && <span className="font-medium text-slate-900">${c.price}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;