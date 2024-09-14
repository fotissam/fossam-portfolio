import React from "react";
import { Box, Container, Text, Flex, Heading, Button, Image, Badge, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function CaseStudiesBox(props) {
  return (
    <>
      <Stack position={"relative"}>
        <Flex direction={{ base: props.mobDirection, md: props.descDirection }} gap={10}>
          <Flex
            direction={"column"}
            justifyContent={"space-between"}
            gap={{ base: "0.8em", md: "1em" }}
            width={{ base: "100%", md: "50%" }}
          >
            <Badge
              colorScheme={props.badgeColor}
              alignSelf="flex-start"
              display={"inline-block"}
              p={2}
              borderRadius={"6px"}
            >
              {props.badgeText}
            </Badge>

            <Text color={"#000"}>{props.mainText}</Text>

            <Button colorScheme={props.badgeColor} size="md" alignSelf="flex-start" rightIcon={<ArrowForwardIcon />}>
              {props.buttonText}
            </Button>
          </Flex>
          <Flex width={{ base: "100%", md: "50%" }} justify={{ base: "center", md: props.imagePosition }}>
            <Image
              src={props.imageSrc}
              alt="Dan Abramov"
              width={'500px'}
              height={{ base: "200px", md: "300px" }}
              objectFit="cover"
            />
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}
