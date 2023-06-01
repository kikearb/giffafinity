import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    spacing: {
      xtiny: "4px",
      tiny: "8px",
      small: "12px",
      mini: "16px",
      base: "24px",
      medium: "32px",
      large: "48px",
      xlarge: "64px",
      huge: "96px",
    },
    colors: {
      purple: "#9933FF",
      lightRed: "#FF6666",
      lightBlue: "#00CCFF",
      lightGreen: "#00FF99",
      lightYellow: "#FFF9AA",
      blue: "#4158D0",
      pink: "#C850C0",
      yellow: "#FFCC70",
      black: "#000000",
      grey: "#999999",
      white: "#FFFFFF",
      gradient:
        "linear-gradient(157.9deg, #4158D0 1.21%, rgba(200, 80, 192, 0.46) 49.58%, rgba(255, 204, 112, 0.58) 96.91%);",
    },
    fontSize: {
      small: ["0.75rem", "1rem"],
      base: ["1rem", "1.5rem"],
      h4: ["1.125rem", "1.75rem"],
      h3: ["1.5rem", "2.25rem"],
      h2: ["2.25rem", "3.25rem"],
      h1: ["2.75rem", "3.75rem"],
    },
    fontFamily: {
      opensans: "Open Sans",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1132px",
    },
  },
} as Options;
