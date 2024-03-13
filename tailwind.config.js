export default{
  content: [
    './**/*.jsx',
    './index.html'
  ],
  theme: {
    screens: {
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        work: ['Work Sans', 'sans'],
        Merri: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}

