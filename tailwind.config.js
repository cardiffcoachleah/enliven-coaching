/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base / neutrals
        cream: '#F6EFE2',        // soft cream page background (warmer than bone)
        parchment: '#EFE6D3',    // slightly deeper cream for sections
        ink: '#1F1A14',          // warm near-black for body copy
        smoke: '#5A544A',        // muted warm grey for secondary text

        // Brand accents — calibrated against Katie's actual logo (coral script)
        ember: '#E16730',        // Coral — the Coaching script colour (primary accent)
        peach: '#ED9A67',        // L. Orange from brand guide (secondary warm)
        sunlit: '#FFD179',       // L. Yellow — menu/accents
        dusk: '#647D98',         // L. Blue — buttons
        sage: '#ACB3A7',         // Sage — hover
        plum: '#3A253B',         // D. Purple — shadows
        gold: '#C89B4A',         // pulled from logo warmth
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-parisienne)', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(58, 37, 59, 0.04), 0 4px 16px rgba(58, 37, 59, 0.06)',
        'lifted': '0 4px 12px rgba(58, 37, 59, 0.08), 0 20px 40px rgba(58, 37, 59, 0.08)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='5'/%3E%3CfeColorMatrix values='0 0 0 0 0.15 0 0 0 0 0.1 0 0 0 0 0.08 0 0 0 0.07 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
