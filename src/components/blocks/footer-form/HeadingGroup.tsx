import { Stack, StackProps, Text, useColorModeValue } from "@chakra-ui/react"
import * as React from "react"
import { Heading } from "../../typography/heading"

interface HeadingGroupProps extends StackProps {
  title: string
  description: string
  mail: string
}

export const HeadingGroup = (props: HeadingGroupProps) => {
  const { title, mail, description, ...stackProps } = props
  return (
    <Stack spacing="1" {...stackProps} alignItems="center">
      <Heading as="h3" size="lg" fontWeight="semibold">
        {title}
      </Heading>
      <Text color={useColorModeValue(`gray.600`, `gray.400`)}>
        {description} {mail}
      </Text>
    </Stack>
  )
}
