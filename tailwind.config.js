/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Erfasst die HTML-Datei im Root-Verzeichnis.
    "./src/**/*.{js,ts,jsx,tsx}", // Erfasst alle JavaScript-, TypeScript- und React-Dateien im src-Ordner.
  ],
  important: "#root", // Überschreibt Default Styles von Material
  theme: {
    extend: {
      colors: {
        "blue-3": "#150E60",
        "blue-2": "#473DC6",
        "blue-1": "#CFE6FF",
        "green-2": "#DFC1FF",
        "green-1": "#C1FF72",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
        "hero-pattern": "url('./assets/HeroPattern.png')",
        "silver-pattern": "url('./assets/SilverPattern.png')"
      }),
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"]
      },
      content: {
        arrow: "url('./assets/Arrow.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        network: "url('./assets/Network.png')",
        star: "url('./assets/Star.png')",
        flash: "url('./assets/Flash.png')",
        pink1: "url('./assets/Pink1.png')",
        pinktropfen: "url('./assets/pink-tropfen.png')",
        pinkherz: "url('./assets/pink-herz.png')",
      },
      transform: {
        'rotate-y-0': 'rotateY(0deg)',
        'rotate-y-180': 'rotateY(180deg)',
      },
    }, 
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
      lg: "1298px"
    }
  },
  plugins: [],
}

