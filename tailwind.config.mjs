/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#FF6B9D',
          orange: '#FFA07A',
          yellow: '#FFD93D',
          purple: '#C490E4',
          blue: '#6BCFFF',
          green: '#7AE582',
        },
        dark: '#2D1B3D',
        light: '#FFF9F5',
      },
      fontFamily: {
        display: ['Righteous', 'cursive'],
        heading: ['Fredoka', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
