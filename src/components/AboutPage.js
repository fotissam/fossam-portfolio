import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <>
      <Flex>
        <Box ml={{ base: 0, md: 60 }} p="4">
          <h1>About Me</h1>
          <Button colorScheme="blue">Button</Button>
        </Box>
      </Flex>
    </>
  );
}
