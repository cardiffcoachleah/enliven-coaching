import Link from 'next/link';
import Layout from '@/components/Layout';
import { images } from '@/lib/images';

export default function About() {
  return (
    <Layout>
      {/* ============ PAGE HEADER ============ */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(255,209,121,0.2) 0%, rgba(246,239,226,0) 55%)',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 bg-ember" />
            <span className="text-xs uppercase tracking-[0.25em] text-ember font-medium">
              About
            </span>
            <span className="h-px w-10 bg-ember" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-plum tracking-tightest leading-[1.02]">
            Meet <span className="italic">Katie</span>
          </h1>
          <p className="font-script text-ember text-3xl md:text-4xl mt-4">
            your coach, companion, & fellow traveller
          </p>
        </div>
      </section>

      {/* ============ OPENING STORY ============ */}
      <section className="relative py-12 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Portrait */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lifted">
                <img
                  src={encodeURI(images.katie)}
                  alt="Katie"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating credentials */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-plum bg-parchment px-4 py-2 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  ICF Certified · ACC
                </span>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-plum bg-parchment px-4 py-2 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  Wayfinder Life Coach
                </span>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-ember" />
                  <span className="text-xs uppercase tracking-[0.25em] text-ember font-medium">
                    A little about me
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-plum tracking-tight leading-[1.1]">
                  What happens when you don't know where to start?
                </h2>
              </div>

              <div className="space-y-6 text-base md:text-lg text-ink/80 leading-relaxed font-light">
                <p>
                  <span className="float-left font-display text-7xl md:text-8xl text-ember leading-none mr-3 mt-1 italic">
                    A
                  </span>
                  s a little girl, I spent my life afraid. Afraid of the dark,
                  afraid to be alone, afraid of being disliked. Emerging into
                  adulthood I found myself outsourcing my feelings and thoughts.
                  I was deeply enmeshed in my family structure.
                </p>
                <p>
                  After several years, a marriage that ended in divorce, and a
                  lot of trial and error, I found myself in a loving and
                  supportive relationship. That relationship brought me my two
                  greatest teachers — my two sons. Becoming a mother catapulted
                  my desire to grow and stretch beyond the patterns and coping
                  mechanisms I'd learned in childhood.
                </p>
                <p>
                  As a coach, I understand the weight of limiting beliefs and
                  the isolation that can come from those assumptions. It's
                  something I've worked through in my own life — and now I'm
                  passionate about helping others break free from those mental
                  blocks to uncover their true potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ APPROACH ============ */}
      <section className="relative py-20 md:py-28 bg-parchment overflow-hidden">
        {/* Mountain wash right */}
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-[0.1] pointer-events-none">
          <img
            src={encodeURI(images.mountains)}
            alt=""
            className="w-full h-full object-cover object-left"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="text-xs uppercase tracking-[0.25em] text-ember font-medium">
                My approach
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-plum tracking-tight leading-[1.05]">
              Curiosity, compassion,
              <br />
              and <span className="italic">real</span> lasting change.
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg text-ink/80 leading-relaxed font-light max-w-3xl">
            <p>
              I have always felt called to help others. I've learned to listen,
              to meet people where they are, and to hold space for their
              personal growth. My coaching is rooted in{' '}
              <span className="italic text-plum">compassionate curiosity</span>{' '}
              — I believe the best way to move through life's challenges is
              with an open heart and an open mind.
            </p>
            <p>
              Through our work together, I'll help you uncover the stories and
              patterns that are keeping you stuck. We'll explore those stories
              — not with judgement, but with genuine listening and compassion.
              It's about taking small, aligned steps forward, and I'll be with
              you every step of the way.
            </p>
          </div>

          {/* Pull quote */}
          <figure className="mt-16 md:mt-20 max-w-3xl">
            <blockquote className="border-l-2 border-ember pl-6 md:pl-10">
              <p className="font-display text-2xl md:text-3xl text-plum italic leading-snug">
                "Change is possible. You don't have to figure it all out on
                your own, and you don't have to stay stuck."
              </p>
              <figcaption className="mt-4 text-sm uppercase tracking-[0.2em] text-ember">
                — Katie
              </figcaption>
            </blockquote>
          </figure>
        </div>
      </section>

      {/* ============ JOURNEY & CREDENTIALS ============ */}
      <section className="relative py-20 md:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="text-xs uppercase tracking-[0.25em] text-ember font-medium">
                Journey & Credentials
              </span>
              <span className="h-px w-10 bg-ember" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-plum tracking-tight leading-tight max-w-2xl mx-auto">
              Built on years of work with the{' '}
              <span className="italic">whole person</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 mt-16">
            {[
              {
                label: 'Wayfinder Life Coach',
                body: 'Certified through Martha Beck\'s Wayfinder programme — an approach grounded in authenticity, intuition, and inner compass work.',
              },
              {
                label: 'ICF Certified · ACC',
                body: 'Associate Certified Coach with the International Coaching Federation, the gold standard for professional coaching practice.',
              },
              {
                label: 'Mind–Body Foundations',
                body: 'Years of prior work as a massage therapist and personal trainer inform a deep understanding of how the body carries what the mind holds.',
              },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-parchment rounded-2xl p-8 border border-plum/10"
              >
                <div className="h-10 w-10 rounded-full bg-ember/15 flex items-center justify-center mb-5">
                  <span className="h-2 w-2 rounded-full bg-ember" />
                </div>
                <h3 className="font-display text-xl text-plum mb-3 tracking-tight">
                  {c.label}
                </h3>
                <p className="text-sm text-ink/75 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-lg md:text-xl text-ink/75 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              I'm here to show you that change is possible. Together, we'll
              explore what's holding you back, uncover your true self, and
              take meaningful steps toward the life you want to live.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-3 rounded-full bg-plum text-cream px-8 py-4 text-base tracking-wide hover:bg-ink transition-colors"
            >
              Let's work together
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1 8h14m-6-6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
