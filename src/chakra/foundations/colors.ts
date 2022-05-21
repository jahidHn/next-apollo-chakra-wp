import { transparentize } from "@chakra-ui/theme-tools"

const colorPalette = {
  colors: {
    black: `#000`,
    white: `#fff`,
    cornBlue: {
      50: `#8ECAE6`,
      100: `#D65A31`,
      200: `#023047`,
    },
    lightBlue: {
      50: `#f0f9ff`,
      100: `#e0f2fe`,
      200: `#bae6fd`,
      300: `#7dd3fc`,
      400: `#38bdf8`,
      500: `#0ea5e9`,
      600: `#0284c7`,
      700: `#0369a1`,
      800: `#075985`,
      900: `#0c4a6e`,
    },
    gray: {
      50: `#fafafa`,
      100: `#f4f4f5`,
      200: `#e4e4e7`,
      300: `#d4d4d8`,
      400: `#a1a1aa`,
      500: `#71717a`,
      600: `#52525b`,
      700: `#3f3f46`,
      800: `#27272a`,
      900: `#18181b`,
    },
    blueGray: {
      50: `#f8fafc`,
      100: `#f1f5f9`,
      200: `#e2e8f0`,
      300: `#cbd5e1`,
      400: `#94a3b8`,
      500: `#64748b`,
      600: `#475569`,
      700: `#334155`,
      800: `#1e293b`,
      900: `#0f172a`,
      950: `#0b111f`,
    },
  },
}

const navBgTransparency = 0.85

const colors = {
  brand: {
    primary: colorPalette.colors.cornBlue[`100`],
    primaryAlpha: transparentize(`blueGray.400`, 0.25)(colorPalette),
    primaryBg: colorPalette.colors.cornBlue[`100`],
    primaryHover: colorPalette.colors.black,
    text: colorPalette.colors.blueGray[`800`],
    textMuted: colorPalette.colors.blueGray[`700`],
    textEmphasized: colorPalette.colors.cornBlue[`200`],
    proseText: colorPalette.colors.gray[`700`],
    proseLink: colorPalette.colors.gray[`900`],
    proseLinkDecoration: colorPalette.colors.gray[`300`],
    heading: colorPalette.colors.black,
    bg: colorPalette.colors.white,
    bgAlpha: transparentize(`white`, navBgTransparency)(colorPalette),
    cardBg: colorPalette.colors.white,
    cardSubheading: colorPalette.colors.blueGray[`700`],
    dark: {
      primary: colorPalette.colors.cornBlue[`100`],
      primaryAlpha: transparentize(`blueGray.400`, 0.25)(colorPalette),
      primaryBg: colorPalette.colors.cornBlue[`100`],
      primaryHover: colorPalette.colors.cornBlue[`100`],
      text: colorPalette.colors.blueGray[`300`],
      textMuted: colorPalette.colors.blueGray[`400`],
      textEmphasized: colorPalette.colors.cornBlue[`100`],
      proseText: colorPalette.colors.gray[`300`],
      proseLink: colorPalette.colors.gray[`100`],
      proseLinkDecoration: colorPalette.colors.gray[`500`],
      heading: colorPalette.colors.white,
      bg: colorPalette.colors.black,
      bgAlpha: transparentize(`blueGray.900`, navBgTransparency)(colorPalette),
      cardBg: colorPalette.colors.blueGray[`800`],
      cardSubheading: colorPalette.colors.blueGray[`400`],
    },
  },
  ...colorPalette.colors,
}

export default colors
