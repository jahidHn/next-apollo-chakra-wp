import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiPlay } from 'react-icons/hi'
import Lottie from "react-lottie-player"
import * as animationPlane from "../../../../public/images/plane.json";
export function HeroHome() {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="24">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '3rem', lg: '2rem' }}
          mt="8"
          align={{ lg: 'center' }}
          justify="space-between"
          alignItems="center"
        >
          <Box flex="1" maxW={{ lg: '520px' }} >
            <Text
              size="xs"
              textTransform="uppercase"
              fontWeight="semibold"
              color="blackAlpha.600"
              // color={mode('blue.600', 'blue.300')}
              letterSpacing="wide"
            >
             Headless Wordpress on Jamstack
            </Text>
            <Heading
              as="h1"
              size="3xl"
              color="blackAlpha.800"
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Build Faster sites for Headless CMS &amp; Wordpress
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
              Developing Faster frontend for Headless CMS, WOrdpress &amp; Headless Wordpress
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
            
              <Button
                size="lg"
                bg="blue.500"
                color="white"
                _hover={{ bg: '#000'}}
                height="14"
                px="8"
                shadow="base"
                leftIcon={<Box as={HiPlay} fontSize="2xl" />}
              >
                Ask for Demo
              </Button>
            </Stack>
          </Box>
          <Box pos="relative" 
          w={{ base: 'full', lg: '460px' }} 
          h={{ base: 'auto', lg: '460px' }} 
          display="flex" 
          flexDirection="row" 
          alignItems="center"
          >
          
            {/* <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: '100%' }}
              objectFit="cover"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHklMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Screening talent"
            /> */}
            <Lottie
            loop
            play
            className="animPlane ml-10"
            animationData={animationPlane}
            speed={2.5}
          />
            {/* <Box
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg={mode('gray.200', 'gray.700')}
            /> */}
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
