import '@/styles/globals.css';
import { Fraunces, Inter_Tight, Parisienne } from 'next/font/google';
import Head from 'next/head';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-parisienne',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Enliven Coaching — Compassionate Curiosity. Authentic Living.</title>
        <meta
          name="description"
          content="Coaching with Katie. A space for compassionate curiosity — explore what's holding you back and uncover the courage to live authentically."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Enliven Coaching" />
        <meta
          property="og:description"
          content="Compassionate Curiosity. Authentic Living. Coaching with Katie."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div
        className={`${fraunces.variable} ${interTight.variable} ${parisienne.variable}`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
