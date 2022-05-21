import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"
import { textStyles as foundationTextStyles } from "../foundations/typography"

const Text = {
  variants: {
    heading: (props: StyleFunctionProps | Dict<any>) => ({
      color: mode(`black`, `white`)(props),
    }),
    prominent: (props: Dict<any>) => ({
      ...foundationTextStyles.prominent,
      strong: {
        ...foundationTextStyles.prominent.strong,
        color: mode(`blueGray.900`, `blueGray.100`)(props),
      },
      a: {
        ...foundationTextStyles.prominent.a,
        color: mode(`blueGray.900`, `blueGray.100`)(props),
      },
    }),
    lightContainer: (props: StyleFunctionProps | Dict<any>) => ({
      color: mode(`blueGray.700`, `blueGray.200`)(props),
    }),
  },
}

export default Text
