import { Box, Stack } from "@chakra-ui/react"
import * as React from "react"
import { ContactForm } from "./form"

export const Contact = () => (
  <Box mx="auto" maxW="3xl">
    <Stack spacing="12">
      <ContactForm />
    </Stack>
  </Box>
)
