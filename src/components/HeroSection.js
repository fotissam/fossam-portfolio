import React from 'react';
import { Box, Container, Text, Flex, Heading, Button, Image  } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import '../styles/section-hero.scss'

export default function HeroSection() {
  return (
    <>
      <Box position={'relative'} w={'100%'} className='section-hero' name="heroSection">
        <Container maxW={'1280px'} display={'flex'} height={'100%'}>
          <Flex marginY={'auto'} direction={{ base: 'column-reverse', md: 'row' }} gap={{ base: '50px', md: '50px' }} w={'100%'} align={'center'}>
            <Flex direction={'column'} gap={5} w={{ base: '100%', md: '75%' }}>
              <Heading color={'#fff'} as={'h1'} fontSize={{ base: '2em', md: '3em' }}>Fotis Samaridis</Heading>
              <Text as={'code'} color={'#9C9C9C'} fontSize={{ base: '1em', md: '1.3em' }}>Hey there! I'm a front-end developer extraordinaire, rocking the digital world with my skills in WordPress, PHP, JavaScript, HTML/CSS, and React. My web design and photography talents add a splash of creativity to every project. Whether I'm coding up a storm or capturing the perfect shot, I'm all about making the web a more beautiful and functional place. Let's create something epic together!</Text>
              <Link
                to="RecentWorks"
                smooth={true}
                duration={500}
              >
               <Button colorScheme='pink' size='xl' width={'fit-content'} py={4} px={6} className='btn-projects'>
                Recent projects
              </Button>
              </Link>
              
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
