import React, { useState } from "react";
import { Box, Badge, Text, Heading, Stack } from "@chakra-ui/react";

export default function SkillBox(props) {
  return (
    <Stack
      direction="column"
      gap={6}
      py={10}
      px={6}
      outline={"2px solid #fff"}
      borderRadius={24}
      _hover={{ outline: "3px solid #fff" }}
      transition={"all 0.3s ease-in-out"}
    >
      <Box>
        <Badge
          colorScheme={props.badgeColor}
          p={2}
          borderRadius={12}
          display={"inline-flex"}
          alignContent={"center"}
          gap={2}
        >
          <Box>{props.skillIcon}</Box>
          <Text>{props.badgeText}</Text>
        </Badge>
      </Box>
      <Heading color={"#fff"} as={"h3"}>{props.skillText}</Heading>
      <Text color={"#fff"}>{props.skillDesc}</Text>
    </Stack>
  );
}
