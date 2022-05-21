import * as React from "react"
import { Box, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { FullWidthContainer } from "./full-width-container"
import { Contact } from "./footer-form"

export const Footer: React.FC = () => (
  <FullWidthContainer>
    <Box as="footer" py={16} role="contentinfo">
      <Contact />
      <Stack direction="column" spacing={16} textAlign="center" maxW="3xl" mx="auto">
        <Text size="10px" colorScheme="gray">
          &copy; {new Date().getFullYear()} by hellojahid.com. All rights reserved. Hire Jamstack Developer specilizes
          in React, Gatsby, Typescript, Graphql, Headless CMS &amp; Wordpress Development. Read more about{` `}
          <Link href="/privacy-policy">Privacy Policy, Terms and Legal Notice</Link>
        </Text>
      </Stack>
    </Box>
  </FullWidthContainer>
)
