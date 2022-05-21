import { Box, Heading, Text } from "@chakra-ui/react"
import * as React from "react"

export const Intro = () => (
  <>
    <Box as="section">
      <Box maxW="2xl" mx="auto" px={{ base: `6`, lg: `8` }} py={{ base: `16`, sm: `20` }} textAlign="center">
        <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
          How Gatsbyjs power up website
        </Heading>
        <Text mt="4" fontSize="lg">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
        </Text>
      </Box>
    </Box>
  </>
)
