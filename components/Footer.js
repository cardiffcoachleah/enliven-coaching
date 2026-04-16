import Link from 'next/link';
import { images } from '@/lib/images';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-parchment">
      {/* Mountain illustration as subtle background wash at the bottom */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-30">
        <img
          src={encodeURI(images.mountains)}
          alt=""
          className="w-full h-auto object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Gradient fade to soften the image's top edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-full pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(239,230,211,1) 0%, rgba(239,230,211,0.6) 40%, rgba(239,230,211,0.2) 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12">
        {/* Top: invitation + CTA */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end pb-16 border-b border-plum/15">
          <div>
            <p className="font-script text-ember text-3xl md:text-4xl leading-tight mb-4">
              Let's begin.
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-plum tracking-tight leading-[1.05] max-w-md">
              A conversation is the first step.
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <a
              href={images.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-plum text-cream px-7 py-4 text-base tracking-wide hover:bg-ink transition-colors w-fit"
            >
              Book a free discovery call
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
            <p className="text-sm text-smoke md:text-right max-w-xs">
              60 minutes, no pressure. Just space to talk about what brought you
              here.
            </p>
          </div>
        </div>

        {/* Bottom: links + logo */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm uppercase tracking-wide text-ink/70 hover:text-plum transition-colors"
            >
              About Katie
            </Link>
            <Link
              href="/get-started"
              className="text-sm uppercase tracking-wide text-ink/70 hover:text-plum transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="flex justify-center">
            <Link href="/" className="block" aria-label="Enliven Coaching — home">
              <img
                src={encodeURI(images.logo)}
                alt="Enliven Coaching"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="flex md:justify-end items-center gap-5">
            <a
              href={images.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-ink/70 hover:text-plum transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href={images.email}
              aria-label="Email"
              className="text-ink/70 hover:text-plum transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 7l9 6 9-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-plum/10 text-xs text-smoke flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Enliven Coaching. All rights reserved.</span>
          <span className="italic">Holding space for what's waiting to be seen.</span>
        </div>
      </div>
    </footer>
  );
}
