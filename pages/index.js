import Link from 'next/link';
import Layout from '@/components/Layout';
import { images } from '@/lib/images';

export default function Home() {
  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        {/* Soft background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgba(255,209,121,0.25) 0%, rgba(246,239,226,0) 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="lg:col-span-6 relative z-10 rise">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-ember" />
                <span className="text-xs uppercase tracking-[0.25em] text-ember font-medium">
                  Enliven Coaching
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-plum leading-[1.02] tracking-tightest">
                What is
                <br />
                <span className="italic text-ember">waiting</span>
                <br />
                to be seen?
              </h1>

              <p className="mt-8 text-lg md:text-xl text-ink/75 leading-relaxed max-w-lg font-light">
                A space for compassionate curiosity — where you can explore the
                patterns shaping your life and uncover the courage to live
                authentically.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href={images.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-plum text-cream px-7 py-4 text-base tracking-wide hover:bg-ink transition-colors"
                >
                  Book a consultation
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
                <Link
                  href="/about"
                  className="text-sm uppercase tracking-[0.2em] text-plum link-underline font-medium"
                >
                  Meet Katie
                </Link>
              </div>
            </div>

            {/* Right: hero image with script overlay */}
            <div className="lg:col-span-6 relative rise" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lifted">
                <img
                  src={encodeURI(images.hero)}
                  alt="A meditator at sunrise"
                  className="w-full h-full object-cover"
                />
                {/* Warm vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(58,37,59,0) 40%, rgba(58,37,59,0.45) 100%)',
                  }}
                />
                {/* Script accent */}
                <p className="absolute bottom-8 left-8 right-8 font-script text-cream text-3xl md:text-4xl leading-tight drop-shadow-lg">
                  breathe, notice,
                  <br />
                  begin again.
                </p>
              </div>

              {/* Credential pill */}
              <div className="hidden md:flex absolute -bottom-5 -right-4 bg-cream rounded-full px-5 py-3 shadow-soft items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-ember" />
                <span className="text-xs uppercase tracking-widest text-ink/80">
                  ICF Certified · ACC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OPENING BREATH ============ */}
      <section className="relative py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-script text-ember text-3xl md:text-4xl mb-6">
            Coaching that meets you
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-plum tracking-tight leading-tight">
            exactly where you are.
          </h2>
          <p className="mt-10 text-lg md:text-xl text-ink/75 leading-relaxed max-w-2xl mx-auto font-light">
            Katie creates a space where you can safely explore what's holding
            you back, uncover the patterns shaping your life, and make room for
            growth and clarity. Together, you'll align your actions with your
            true self.
          </p>
        </div>
      </section>

      {/* ============ FIELD GUIDE: What a session looks like ============ */}
      <section className="relative py-20 md:py-32 bg-parchment overflow-hidden">
        {/* Faint mountain wash on left edge */}
        <div className="absolute inset-y-0 left-0 w-1/2 opacity-[0.08] pointer-events-none">
          <img
            src={encodeURI(images.mountains)}
            alt=""
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <div className="mb-16 md:mb-24 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="text-xs uppercase tracking-[0.25em] text-ember font-medium">
                What to expect
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-plum leading-[1.05] tracking-tight">
              A session is not a
              <br />
              <span className="italic">formula.</span> It's a practice.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {[
              {
                number: '01',
                title: 'Compassionate Curiosity',
                body: 'Explore your thoughts, feelings, and patterns without judgement or the pressure to be perfect. Together, we create space for curiosity and growth.',
              },
              {
                number: '02',
                title: 'Playful Discovery',
                body: 'With creativity and a sense of wonder, we uncover the hidden stories and patterns that shape your life — inviting new possibilities to emerge.',
              },
              {
                number: '03',
                title: 'Aligned Action',
                body: "Together, we translate insights into meaningful, practical actions that align with your authentic self and the life you're building.",
              },
            ].map((item, i) => (
              <div
                key={item.number}
                className="group relative md:pt-8"
                style={{
                  // Slight offset for editorial rhythm
                  transform: i === 1 ? 'translateY(24px)' : 'none',
                }}
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-5xl text-ember/80 italic">
                    {item.number}
                  </span>
                  <span className="h-px flex-1 bg-plum/15" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-plum mb-4 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-base text-ink/75 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MEET YOUR COACH ============ */}
      <section className="relative py-20 md:py-32 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Text intro above the landscape */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="text-xs uppercase tracking-[0.25em] text-ember font-medium">
                Meet your coach
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-plum leading-[1.05] tracking-tight">
              I'm <span className="italic">Katie</span> — and I believe in
              holding space for who you really are.
            </h2>
          </div>

          {/* Wide atmospheric landscape */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-lifted aspect-[16/10] md:aspect-[21/10]">
            <img
              src={encodeURI(images.tree)}
              alt="A solitary tree on open ground, with a figure walking beneath it"
              className="w-full h-full object-cover"
            />
            {/* Subtle warm wash to help text legibility if we add any */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(58,37,59,0.15) 0%, rgba(58,37,59,0) 40%)',
              }}
            />
            {/* Script overlay bottom-right */}
            <p className="absolute bottom-6 right-6 md:bottom-10 md:right-10 font-script text-cream text-2xl md:text-4xl drop-shadow-lg">
              walking alongside you.
            </p>
          </div>

          {/* Text below the landscape, two columns */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-12 md:mt-16 items-start">
            <div className="md:col-span-7">
              <div className="space-y-5 text-base md:text-lg text-ink/80 leading-relaxed font-light">
                <p>
                  I walk alongside you as you reconnect with your true self. As
                  a certified Wayfinder Life Coach and ICF Certified Coach
                  (ACC), I bring both heart and professionalism to this work.
                </p>
                <p>
                  My journey began as a massage therapist and personal trainer,
                  where I developed a deep understanding of the mind-body
                  connection. Coaching with me is a partnership — we approach
                  the process with curiosity, playfulness, and a shared
                  commitment to discovering what's possible for you.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 md:pl-6 md:border-l md:border-plum/15">
              <div className="flex flex-col gap-5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border border-plum/30 text-plum px-7 py-4 text-base tracking-wide hover:bg-plum hover:text-cream transition-colors w-fit"
                >
                  More about Katie
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12m-5-5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="flex flex-col gap-2 text-xs uppercase tracking-widest text-smoke">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                    ICF Certified · ACC
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                    Wayfinder Life Coach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INVITATION STRIP ============ */}
      <section className="relative bg-plum text-cream py-20 md:py-28 overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-script text-sunlit text-3xl md:text-4xl mb-5">
            curious what's possible?
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-cream leading-tight tracking-tight mb-8">
            Let's start with a free discovery call.
          </h2>
          <p className="text-base md:text-lg text-cream/75 leading-relaxed max-w-xl mx-auto mb-10 font-light">
            Sixty minutes. No pressure. Just space to talk about what brought
            you here and see if we're a good fit.
          </p>
          <a
            href={images.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-ember text-plum px-8 py-4 text-base tracking-wide hover:bg-sunlit transition-colors"
          >
            Book your free call
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
      </section>
    </Layout>
  );
}
