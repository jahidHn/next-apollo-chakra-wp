import { mode } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"

const Button = {
  baseStyle: {
    fontWeight: `normal`,
  },
  defaultProps: {
    size: `brand`,
  },
  sizes: {
    brand: {
      h: 8,
      minW: 10,
      fontSize: `md`,
      px: 4,
    },
  },
  variants: {
    primary: (props: Dict<any>) => ({
      bg: mode(`brand.primary`, `brand.dark.primary`)(props),
      color: `white`,
      _hover: {
        bg: mode(`brand.primaryHover`, `brand.dark.primaryHover`)(props),
        _disabled: {
          bg: `brand.primary`,
        },
      },
      _active: { bg: mode(`brand.primaryHover`, `brand.dark.primaryHover`)(props) },
    }),
    outline: (props: Dict<any>) => ({
      color: mode(`text`, `white`)(props),
      bg: `transparent`,
      borderStyle: `solid`,
      borderColor: mode(`brand.primary`, `brand.dark.primary`)(props),
      borderWidth: `1px`,
      _hover: {
        color: `white`,
        bg: mode(`brand.primary`, `brand.dark.primary`)(props),
      },
    }),
  },
}

export default Button
