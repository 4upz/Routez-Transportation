import { extendTheme } from "@chakra-ui/react"

// Custom theme settings
export const customTheme = extendTheme({
  colors: {
    whiteIsh: "#f4f7f5",
    brand: {
      50: "#fffada",
      100: "#fff0ad",
      200: "#ffe77d",
      300: "#ffdd4b",
      400: "#ffd31a",
      500: "#e6ba00",
      600: "#b39100",
      700: "#806700",
      800: "#4e3e00",
      900: "#1c1500",
    },
  },
  font: {
    heading: '"Roboto", "Avenir Next", sans-serif',
    body: '"Roboto", "system-ui, sans-serif"',
    mono: "Menlo, monospace",
  },
})
