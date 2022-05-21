import { Box, SimpleGrid, Text, useColorModeValue as mode } from "@chakra-ui/react"
import * as React from "react"
import { BsFillGridFill, BsShieldLockFill } from "react-icons/bs"
import { Feature } from "./Feature"
import { Heading } from "../../typography/heading"
import { FullWidthContainer } from "../../blocks/full-width-container"

export const FeaturesImage = () => (
  <FullWidthContainer as="section" py={{ base: `20`, md: `50`, lg: `150` }} bg={mode(`gray.50`, `#D65A31`)}>
    <Box>
      <Heading as="h2" mb="4">
        <Text as="p" fontSize="sm">
          Best of the best UX
        </Text>
        Why I like static PWA on JAMstack
      </Heading>
      <Text fontSize={{ md: `lg` }} mb="4" color={mode(`black`, `white`)}>
        Website acting like App will definately enhance User Experiences.
      </Text>
    </Box>
    <SimpleGrid columns={{ base: 1, md: 3 }} mt="4rem" spacing="8">
      <Feature icon={BsFillGridFill} title="PERFORMERMANT &amp; SECURE">
        The GatsbyJS produces static PWAs and no direct access to database. Once loaded, Gatsby fetches resources for
        other pages, so clicking around on the site feels incredibly fast.
      </Feature>
      <Feature icon={BsFillGridFill} title="MULTIPLE DATA SOURCES">
        GatsbyJs allow developers to fetch data from countless data sources and CMS like Wordpress, Shopify, Strapi,
        contentfull, Sanity and many more. Also, there is single click deploy on different platforms like netlify,
        vercel, aws, firebase etc.
      </Feature>
      <Feature icon={BsShieldLockFill} title="ENHANCED USER EXPERIENCE">
        Because clicking and walking through your website is like taking a walk in a park on a sunny day without being
        surprised by sudden turns, stairs, or dead ends.
      </Feature>
    </SimpleGrid>
  </FullWidthContainer>
)
