import { Box, Center, Heading, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import * as Logo from './Brands'

export const LogoBox = () => {
  return (
    <Box as="section" py="20">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Heading fontWeight="extrabold" maxW="md" mx="auto" textAlign="center">
          CMS, Headless CMS &amp; Backend Technologies 
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          mt="8"
          spacing="6"
          color={mode('inherit', 'white')}
          mb="16"
        >
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <Logo.ChatMonkey h="6" opacity={0.64} />
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <Logo.Finnik h="4" opacity={0.64} />
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <Logo.Lighthouse h="5" opacity={0.64} />
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <Logo.Plumtic h="5" opacity={0.64} />
          </Center>
        </SimpleGrid>
        <Heading fontWeight="extrabold" maxW="md" mx="auto" textAlign="center">
          Frontend Technologies 
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          mt="8"
          spacing="6"
          color={mode('inherit', 'white')}
        >
          
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <Logo.Lighthouse h="5" opacity={0.64} />
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <Logo.Plumtic h="5" opacity={0.64} />
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <Logo.Wakanda h="5" opacity={0.64} />
          </Center>
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <Logo.WorkScout h="5" opacity={0.64} />
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
