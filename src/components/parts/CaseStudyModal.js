import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Badge,
  Button,
  Box,
  Link,
  Text,
  Stack,
  Divider,
} from "@chakra-ui/react";

export default function CaseStudyModal({
  isOpen,
  onClose,
  modalHeading,
  modalBody,
  colorScheme,
  modalTextB,
  imageLink,
  buttonText,
  stacks = [], // Default to an empty array if not provided
}) {
  // Ensure stacks is an array
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
      <ModalContent>
        <ModalHeader>{modalHeading}</ModalHeader>
        <Divider />
        <ModalBody pb={6}>
          <Text
            as={"code"}
            color={"#9C9C9C"}
            fontSize={{ base: "14px", md: "16px" }}
            align={"center"}
            maxW={"800px"}
          >
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
              maxW={"800px"}
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
          <Stack mt={5}>
            <Link href={imageLink} isExternal>
              <Button w={"100%"} colorScheme={colorScheme}>
                {buttonText}
              </Button>
            </Link>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button variant={"outline"} size={"sm"} onClick={onClose}>
            Close me
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
