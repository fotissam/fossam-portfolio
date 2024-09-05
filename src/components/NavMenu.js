import React from 'react';
import { Flex, Container, Box, Text } from '@chakra-ui/react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import '../styles/navmenu.scss'

export default function NavMenu() {
  return (
    <Box position={'fixed'} top={0} w={'100%'} zIndex={2} >
      <Container maxW={'1400px'} bg='blackAlpha.800' className='nav-bar' paddingY={{ base: '1em', md: '2em' }}>
        <Container maxW={'1280px'}>
          <Flex >
            <Flex direction={'row'} width={'100%'} justify={'center'} gap={5} alignItems={'center'}>
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/about" className='nav-link'>About</Link>
            </Flex>
            <Flex>
              <FaLinkedin className='nav-link_socialicon' />
            </Flex> 
          </Flex>

        </Container >
      </Container >
    </Box>
  );
}
