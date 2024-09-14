import React from 'react';
import { Box, Container, Text, Flex, Heading, Button, Image  } from '@chakra-ui/react';
import '../styles/section-hero.scss'

export default function HeroSection() {
  return (
    <>
      <Box position={'relative'} w={'100%'} className='section-hero' name="heroSection">
        <Container maxW={'1280px'} display={'flex'} height={'100%'}>
          <Flex marginY={'auto'} direction={{ base: 'column-reverse', md: 'row' }} gap={{ base: '50px', md: '50px' }} w={'100%'} align={'center'}>
            <Flex direction={'column'} gap={5} w={{ base: '100%', md: '75%' }}>
              <Heading color={'#fff'} as={'h1'} fontSize={{ base: '2em', md: '3em' }}>Fotis Samaridis</Heading>
              <Text as={'code'} color={'#9C9C9C'} fontSize={{ base: '1em', md: '1.3em' }}>Hello, I'm a web developer and designer from Athens, Greece. I create bespoke websites to help people go further online</Text>
              <Button colorScheme='green' size='xl' width={'fit-content'} py={4} px={6} className='btn-projects'>
                My Projects
              </Button>
            </Flex>
            <Flex direction={'column'} gap={5} w={{ base: '100%', md: '75%' }} align={'center'}>
              <Image borderRadius={'50%'} boxSize={{ base: '200px', md: '400px' }} src='https://fotissam.github.io/fossam-portfolio/images/fotis_samaridis_profile.jpg' alt='Fotis Samaridis Profile Pic' />


            </Flex>
          </Flex>

        </Container >
      </Box>
    </>
  );
}
