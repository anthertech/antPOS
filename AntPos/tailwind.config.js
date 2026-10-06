const plugin = require('tailwindcss/plugin')

module.exports = {
  // frappe-ui >= 0.1.2xx restricts imports to its package exports; the preset
  // lives at `frappe-ui/tailwind` (an ES module, hence `.default`).
  presets: [require('frappe-ui/tailwind').default],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/frappe-ui/src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      })
    }),
  ],
}
