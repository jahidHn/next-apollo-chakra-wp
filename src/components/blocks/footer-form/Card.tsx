import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react"
import * as React from "react"

export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue(`white`, `black.alpha`)}
    shadow="base"
    rounded="lg"
    p={{ base: `4`, md: `8` }}
    {...props}
  />
)
