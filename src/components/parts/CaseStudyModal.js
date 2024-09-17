import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Badge,
  Button,
  Box,
  Link,
  Text,
  Divider,
  Flex,
  Image,
} from "@chakra-ui/react";

export default function CaseStudyModal({
  isOpen,
  onClose,
  modalHeading,
  modalBody,
  colorScheme,
  modalTextB,
  imageLink,
  imageSrc,
  imageAlt,
  buttonText,
  stacks = [],
  designLink,
}) {
  const validStacks = Array.isArray(stacks) ? stacks : [];

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered={true}
      colorScheme={colorScheme}
    >
      <ModalOverlay bg="rgba(0, 0, 0, 0.7)" />
      <ModalContent maxWidth={"800px"}>
        <ModalHeader align={"center"}>{modalHeading}</ModalHeader>
        <Divider />
        <ModalBody pb={6}>
          <Flex direction={{ base: "column", md: "row" }} gap={"20px"}>
            <Flex width={{ base: "100%", md: "60%" }} direction={"column"} gap={"24px"}>
              <Text as={"code"} color={"#9C9C9C"} fontSize={{ base: "14px", md: "16px" }}>
                Some words:
              </Text>
              <Box>{modalBody}</Box>
              <Box>{modalTextB}</Box>
              <Box mt={2}>
                <Text
                  as={"code"}
                  color={"#9C9C9C"}
                  fontSize={{ base: "14px", md: "16px" }}
                  align={"center"}
                  maxW={"900px"}
                >
                  Stack:
                </Text>
                <Box>
                  {validStacks.map((stack, index) => (
                    <Badge key={index} colorScheme={colorScheme} mr={3}>
                      {stack}
                    </Badge>
                  ))}
                </Box>
              </Box>
            </Flex>
            <Flex width={{ base: "100%", md: "40%" }} direction={"column"}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={"500px"}
                height={{ base: "200px", md: "300px" }}
                objectFit="contain"
              />
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
          gap={"20px"}
        >
          <Flex direction={{ base: "column", md: "row" }} gap={"20px"}>
            <Link href={imageLink} isExternal>
              <Button w={"100%"} colorScheme={colorScheme} justifyItems={"flex-start"} size={"sm"}>
                {buttonText}
              </Button>
            </Link>
            {designLink !== "" && (
              <Link href={designLink} isExternal>
                <Button
                  size={"sm"}
                  w={"100%"}
                  variant={"outline"}
                  colorScheme={colorScheme}
                  justifyItems={"flex-start"}
                >
                  Design
                </Button>
              </Link>
            )}
          </Flex>
          <Button variant={"outline"} size={"sm"} onClick={onClose}>
            Close me
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
