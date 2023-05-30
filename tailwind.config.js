/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'desktop': '1236px',
      'nest': '662px',
      'laptop': '1032px',
      'phone': '826px',
      'iphone': '400px',
    },
    extend: {
      marginleft: {
        '715px': '715px',
      },
      marginright: {
        '300px': '300px',
      },
      left: {
        '179px': '179px',
        '180px': '180px',
        '461px': '461px',
        '213px;': '213px;',
        '1120px': '1120px',
        '680px': '680px',
      },
      height: {
        '3px': '3px',
        '600px': '600px',
        '87px': '87px',
      },
      bottom: {
        '-405px': '-405px',
        '268px': '268px',
        '-666px': '-666px',
        '4px': '4px',
        '680px': '680px',
      },
      top: {
        '-67px': '-67px',
        '-127px': '-127px',
      },
      right: {
        '557px': '557px',
      },
    },
  },
  plugins: [],
}
