import Layout from '@/components/Layout';
import { images } from '@/lib/images';
import { useState } from 'react';

export default function GetStarted() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback — swap to Formspree / Netlify forms later.
    const subject = encodeURIComponent(
      `New enquiry from ${form.name || 'your website'}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:enliven-u@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      {/* ============ HEADER ============ */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(255,209,121,0.22) 0%, rgba(246,239,226,0) 55%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 bg-ember" />
            <span className="text-xs uppercase tracking-[0.25em] text-ember font-medium">
              Get Started
            </span>
            <span className="h-px w-10 bg-ember" />
          </div>
          <p className="font-script text-ember text-3xl md:text-4xl mb-4">
            whenever you're ready —
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-plum tracking-tightest leading-[1.02]">
            Let's <span className="italic">begin.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink/75 leading-relaxed max-w-xl mx-auto font-light">
            There's no wrong way to reach out. Book a free consultation, or
            send a note if you have questions first — whatever feels right.
          </p>
        </div>
      </section>

      {/* ============ TWO PATHS ============ */}
      <section className="relative py-12 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Book a session card */}
            <div className="relative bg-plum rounded-[2rem] p-10 md:p-12 text-cream overflow-hidden">
              {/* Texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />
              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px w-10 bg-sunlit" />
                  <span className="text-xs uppercase tracking-[0.25em] text-sunlit font-medium">
                    Ready to book?
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] mb-6">
                  Book a <span className="italic text-sunlit">free</span>
                  <br />
                  discovery call.
                </h2>
                <p className="text-cream/75 leading-relaxed mb-8 font-light">
                  A relaxed 60-minute conversation about what's bringing you to
                  coaching, and whether we're a good fit to work together. No
                  pressure, no obligation.
                </p>
                <div className="mt-auto">
                  <a
                    href={images.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-ember text-plum px-7 py-4 text-base tracking-wide hover:bg-sunlit transition-colors"
                  >
                    Book a session with me
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M1 8h14m-6-6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="relative bg-parchment rounded-[2rem] p-10 md:p-12 border border-plum/10">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-ember" />
                <span className="text-xs uppercase tracking-[0.25em] text-ember font-medium">
                  Have a question?
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-plum tracking-tight leading-[1.1] mb-6">
                Send me a <span className="italic text-ember">note.</span>
                <br />
                I'd love to hear.
              </h2>
              <p className="text-ink/75 leading-relaxed mb-8 font-light">
                Not sure if coaching is right for you? Have a question about
                the process, or just want to say hello? I'll get back to you
                as soon as I can.
              </p>

              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-widest text-ink/70 mb-2"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full bg-cream/70 border border-plum/15 rounded-lg px-4 py-3 text-ink placeholder-smoke focus:outline-none focus:border-ember transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-ink/70 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-cream/70 border border-plum/15 rounded-lg px-4 py-3 text-ink placeholder-smoke focus:outline-none focus:border-ember transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest text-ink/70 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-cream/70 border border-plum/15 rounded-lg px-4 py-3 text-ink placeholder-smoke focus:outline-none focus:border-ember transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-plum text-cream px-7 py-4 text-base tracking-wide hover:bg-ink transition-colors w-full justify-center sm:w-auto"
                >
                  Send message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1 8h14m-6-6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ / COMMON QUESTIONS ============ */}
      <section className="relative py-20 md:py-28 bg-parchment">
        <div className="relative max-w-3xl mx-auto px-6 md:px-10">
          <div className="mb-12 text-center">
            {/* Small decorative gold mark */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/60" />
              <svg width="8" height="8" viewBox="0 0 8 8" className="text-gold/70">
                <circle cx="4" cy="4" r="2" fill="currentColor" />
              </svg>
              <span className="h-px w-8 bg-gold/60" />
            </div>
            <p className="font-script text-ember text-2xl md:text-3xl mb-3">
              wondering about —
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-plum tracking-tight leading-tight">
              A few common questions.
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'What happens on a discovery call?',
                a: "We talk — honestly and openly — about what's bringing you to coaching, what you're hoping to explore, and whether we're a good fit to work together. It's 60 minutes, free of charge, with no expectation to commit.",
              },
              {
                q: 'Is coaching the same as therapy?',
                a: "No. Coaching is forward-looking — focused on clarity, patterns, and aligned action in the present. Therapy is often the right fit for processing trauma or mental-health conditions. I'm happy to talk through what you're looking for and help you find the right support, whatever that looks like.",
              },
              {
                q: 'How often would we meet?',
                a: "Most clients meet with me weekly or every other week, though we can shape the rhythm together based on what works for your life and the depth of what you're exploring.",
              },
              {
                q: "I'm not sure I'm ready. What should I do?",
                a: "That's completely okay. A discovery call is a low-pressure way to figure that out. You don't have to have everything figured out before you reach out — that's often exactly the place where coaching meets people.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-cream rounded-2xl border border-plum/10 overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-6 md:px-8 py-5 flex items-center justify-between gap-4 hover:bg-cream/60 transition-colors">
                  <h3 className="font-display text-lg md:text-xl text-plum tracking-tight">
                    {item.q}
                  </h3>
                  <span className="flex-shrink-0 h-7 w-7 rounded-full border border-plum/20 flex items-center justify-center text-plum group-open:rotate-45 transition-transform">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 text-ink/75 leading-relaxed font-light">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
