import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"

const baseStyles = {
  fontSize: [`xs`, null, null, `sm`],
  fontWeight: `medium`,
  letterSpacing: `widest`,
}

const Badge = {
  defaultProps: {
    variant: `default`,
  },
  variants: {
    default: (props: StyleFunctionProps | Dict<any>) => ({
      ...baseStyles,
      bg: mode(`brand.bg`, `brand.dark.bg`)(props),
    }),
    light: (props: Dict<any>) => ({
      ...baseStyles,
      bg: mode(`brand.bg`, `brand.dark.bg`)(props),
      color: mode(`blueGray.500`, `blueGray.400`)(props),
      px: `1rem`,
      py: `4px`,
      borderRadius: `xl`,
    }),
    dark: (props: Dict<any>) => ({
      ...baseStyles,
      bg: mode(`blueGray.50`, `blueGray.800`)(props),
      color: mode(`blueGray.600`, `blueGray.400`)(props),
      px: `1rem`,
      py: `4px`,
      borderRadius: `xl`,
    }),
  },
}

export default Badge
