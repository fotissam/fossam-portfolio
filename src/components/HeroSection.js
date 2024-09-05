import React from 'react';
import { Box, Container, Text, Flex, Heading, Button } from '@chakra-ui/react';
import '../styles/section-hero.scss'

export default function HeroSection() {
  return (
    <>
      <Box position={'relative'} w={'100%'} className='section-hero'>
        <Container maxW={'1280px'} display={'flex'} height={'100%'}>
          <Flex marginY={'auto'} direction={{ base: 'column', md: 'row' }} gap={5} w={'100%'}>
            <Flex direction={'column'} gap={5} w={{ base: '100%', md: '75%' }}>
              <Heading color={'#fff'} as={'h1'} fontSize={{ base: '2em', md: '3em' }}>Fotis Samaridis</Heading>
              <Text as={'code'} color={'#9C9C9C'} fontSize={{ base: '1em', md: '1.3em' }}>Hello, I'm a web developer and designer from Athens, Greece. I create bespoke websites to help people go further online</Text>
              <Button colorScheme='green' size='xl' width={'fit-content'} py={4} px={6} className='btn-projects'>
                My Projects
              </Button>
            </Flex>
            <Flex direction={'column'} gap={5} w={{ base: '100%', md: '75%' }}>
              <Text color={'#fff'}>Hello</Text>


            </Flex>
          </Flex>

        </Container >
      </Box>
    </>
  );
}
