import {
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
  Stack,
  StackDivider,
  StackProps,
  Button,
} from "@chakra-ui/react"
import * as React from "react"
import { Card } from "./Card"
import { HeadingGroup } from "./HeadingGroup"

export const ContactForm = (props: StackProps) => (
  <Stack as="section" spacing="6" {...props} py="3.5rem" id="contact">
    <HeadingGroup title="Say Hello" description="Reach me at" mail="tohellojahid@gmail.com" />
    <Card>
      <Stack divider={<StackDivider />} spacing="6">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <Stack direction={{ base: `column`, md: `row` }} width="full" spacing="4">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" id="name" name="Name" required />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" id="email" required name="Email" />
              <FormHelperText>We will never share your email.</FormHelperText>
            </FormControl>
          </Stack>
          <Stack width="full" spacing="4">
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea id="message" required name="Message" />
            </FormControl>
            <Button type="submit" mt="5" size="lg" variant="primary" maxW="40" textAlign="left">
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Card>
  </Stack>
)
