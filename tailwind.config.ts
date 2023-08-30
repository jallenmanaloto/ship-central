import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        midnight: '#212b36',
        body: '#637381'
      },
      colors: {
        dashboard: '#f4f6f8',
        category: '#454f5b',
        categoryInactive: '#919eab'
      },
      letterSpacing: {
        category: '0.3rem'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  // darkMode: "class"
}
export default config
