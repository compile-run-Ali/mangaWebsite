import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 1px 20px #524656', // Define your custom drop shadow here
      },
      backgroundImage: {
        // Your existing custom background images
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Your existing custom colors
        'main-gray': '#262420',
        'main-gray-light': '#2A2A2A',
        'main-gray-lighter': '#3D3D3D',
        'main-purple': '#2D2238',
        'main-purple-dark': '#22162B',
        'main-purple-light': '#3E2D5A',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
export default config
