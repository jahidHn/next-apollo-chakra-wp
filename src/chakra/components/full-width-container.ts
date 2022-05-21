import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"
import colors from "../foundations/colors"
import InnerContainerStyles from "./container"

const FullWidthContainer = {
  parts: [`outer`, `inner`],
  baseStyle: {
    outer: {
      w: `100%`,
      margin: 0,
    },
    inner: {
      ...InnerContainerStyles.baseStyle,
    },
  },
  variants: {
    default: (props: Dict<any> | StyleFunctionProps) => ({
      outer: {
        bg: mode(`brand.bg`, `brand.dark.bg`)(props),
      },
    }),
    hero: ({ colorMode }: any) => {
      const isDarkMode = colorMode === `dark`
      const topColor = isDarkMode ? colors.brand.dark.bg : colors.brand.bg
      const bottomColor = isDarkMode ? colors.blueGray[`950`] : colors.brand.bg

      return {
        outer: {
          bg: `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`,
        },
      }
    },
    light: ({ colorMode }: any) => {
      const isDarkMode = colorMode === `dark`
      const topColor = isDarkMode ? colors.blueGray[`800`] : colors.blueGray[`50`]
      const bottomColor = isDarkMode ? colors.brand.dark.bg : colors.blueGray[`50`]

      return {
        outer: {
          bg: `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`,
        },
      }
    },
    dark: ({ colorMode }: any) => {
      const isDarkMode = colorMode === `dark`
      const topColor = isDarkMode ? colors.blueGray[`950`] : colors.blueGray[`700`]
      const bottomColor = isDarkMode ? colors.blueGray[`900`] : colors.blueGray[`700`]

      return {
        outer: {
          bg: `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`,
        },
        inner: {
          color: `blueGray.300`,
        },
      }
    },
    navigation: (props: Dict<any>) => ({
      outer: {
        bg: mode(`brand.bgAlpha`, `brand.dark.bgAlpha`)(props),
        backdropFilter: `blur(8px)`,
        position: `fixed`,
        display: `flex`,
        zIndex: `sticky`,
      },
      inner: {
        header: {
          color: mode(`black`, `white`)(props),
        },
      },
    }),
    navigationWithSub: (props: Dict<any>) => ({
      outer: {
        bg: mode(`brand.bgAlpha`, `brand.dark.bgAlpha`)(props),
        backdropFilter: `blur(8px)`,
        position: `fixed`,
        display: `flex`,
        zIndex: `sticky`,
      },
      inner: {
        header: {
          color: mode(`black`, `white`)(props),
        },
      },
    }),
    fullBleed: {
      outer: {
        bg: `transparent`,
        color: `white`,
        display: `flex`,
        zIndex: `sticky`,
      },
      inner: {
        button: {
          color: `gray.100`,
          _hover: {
            color: `white`,
          },
        },
        "[data-name='subnavigation']": {
          color: `gray.100`,
        },
      },
    },
  },
}

export default FullWidthContainer
