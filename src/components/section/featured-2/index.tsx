import {
  Box,
  Center,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaCopy, FaPlug, FaRecycle } from 'react-icons/fa'
import { Feature } from './Feature'

export const FeaturedTwo = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} pt="10" pb="32">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
      <Box textAlign="center" mx="auto" mb="20">
          <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight">
          Why Using Headless Wordpress
          </Heading>
          <Text mt="4" fontSize="lg" color={mode("gray.600", "gray.400")}>
          Unshackle Your WordPress Instance with the fasted fronted experiences
          </Text>
        </Box>
       
        <Box mt="24">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
            <Stack spacing="12" maxW="lg">
              <Feature icon={<Box as={FaCopy} w="6" h="6" />} title="Fast &amp; Secured">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
              </Feature>
              <Feature icon={<Box as={FaPlug} w="6" h="6" />} title="Create Richer, Integrated Experiences">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
              </Feature>
              <Feature icon={<Box as={FaRecycle} w="6" h="6" />} title="Third-party integration capabilities">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
              </Feature>
            </Stack>
            <Center shadow="lg" minH="26rem">
              <Img
                objectFit="cover"
                w="full"
                h="full"
                src="https://images.unsplash.com/photo-1609921205586-7e8a57516512?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2lnbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Holding phone with app installed"
              />
            </Center>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
