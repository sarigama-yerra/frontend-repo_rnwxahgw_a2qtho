import { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus({ ok: true, msg: "Thanks! I will get back to you soon." });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-3 text-slate-700">Have a question or want to say hello? Send a message.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl p-6 bg-white/70 backdrop-blur ring-1 ring-slate-200">
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input name="name" required className="mt-2 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400" />

            <label className="block text-sm font-medium text-slate-700 mt-4">Email</label>
            <input name="email" type="email" required className="mt-2 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400" />

            <label className="block text-sm font-medium text-slate-700 mt-4">Message</label>
            <textarea name="message" rows="5" required className="mt-2 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400" />

            <button disabled={loading} className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
              {loading ? "Sending..." : "Send message"}
            </button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? "text-emerald-600" : "text-rose-600"}`}>{status.msg}</p>
            )}
          </div>

          <div className="rounded-3xl p-6 bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 ring-1 ring-white shadow-inner">
            <p className="text-slate-700">
              I read every message personally. Whether it's about a course, collaboration, or a simple hello — I'd love to hear from you.
            </p>
            <div className="mt-6 text-sm text-slate-600">
              <p>Response time: within 2-3 business days</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;