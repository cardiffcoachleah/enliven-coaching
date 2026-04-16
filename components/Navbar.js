import Link from 'next/link';
import { useState, useEffect } from 'react';
import { images } from '@/lib/images';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/about', label: 'About Katie' },
    { href: '/get-started', label: 'Get Started' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-plum/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between py-4 md:py-5">
        {/* Logo lockup */}
        <Link href="/" className="block group" aria-label="Enliven Coaching — home">
          <img
            src={encodeURI(images.logo)}
            alt="Enliven Coaching"
            className="h-11 md:h-14 w-auto transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm tracking-wide uppercase text-ink/75 hover:text-plum transition-colors link-underline"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={images.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-plum text-cream px-5 py-2.5 text-sm tracking-wide hover:bg-ink transition-colors"
          >
            Book a Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12m-5-5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-plum transition-transform ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-plum transition-opacity ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-plum transition-transform ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-plum/10 px-6 py-6">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-plum"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={images.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-plum text-cream px-5 py-3 mt-2 text-sm tracking-wide"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
