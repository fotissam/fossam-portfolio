import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Container,
  useToast,
  Heading,
  FormHelperText,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  // Error checks only after form is submitted
  const isNameError = hasSubmitted && formData.name === "";
  const isEmailError = hasSubmitted && formData.email === "";
  const isMessageError = hasSubmitted && formData.message === "";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    if (isNameError || isEmailError || isMessageError) {
      toast({
        title: "Please fill out all required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_6n7o48n", // Replace with your actual EmailJS Service ID
        "template_0rba8au", // Replace with your actual EmailJS Template ID
        formData,
        "Qr--64P6U1YsFHrAX" // Replace with your actual EmailJS User/Public Key
      )
      .then(() => {
        setLoading(false);
        toast({
          title: "Thank you for your message!",
          description: "Your message has been sent successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setHasSubmitted(false);
      })
      .catch(() => {
        setLoading(false);
        toast({
          title: "An error occurred.",
          description: "Unable to send your message. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Stack position={"relative"} w={"100%"} bg={"#1B1B1B"} py={"40px"} name="contactMe">
      <Container
        maxW={"1280px"}
        display={"flex"}
        flexDirection={"column"}
        gap={10}
        height={"100%"}
        justify={"center"}
      >
        <Heading
          textAlign={"center"}
          color={"#fff"}
          as={"h2"}
          fontSize={{ base: "2em", md: "3em" }}
        >
          Contact Me
        </Heading>
        <Flex direction={{ base: "column-reverse", md: "row" }} gap={10}>
          <Flex direction={"column"} width={{ base: "100%", md: "30%" }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4} maxW={"800px"}>
                {/* Name Field */}
                <FormControl id="name" isRequired isInvalid={isNameError} mb={10}>
                  <Input
                    variant={"unstyled"}
                    borderBottom={"1px solid #fff"}
                    borderRadius={"none"}
                    paddingBottom={"6px"}
                    errorBorderColor="red.300"
                    type="text"
                    name="name"
                    color={"#fff"}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Leave here your name *"
                    required
                    _focus={{ borderColor: "#319795" }}
                  />
                  {isNameError && <FormErrorMessage>Name is required.</FormErrorMessage>}
                </FormControl>

                {/* Email Field */}
                <FormControl id="email" isRequired isInvalid={isEmailError} mb={10}>
                  <Input
                    variant={"unstyled"}
                    borderBottom={"1px solid #fff"}
                    borderRadius={"none"}
                    paddingBottom={"6px"}
                    color={"#fff"}
                    errorBorderColor="red.300"
                    type="email"
                    name="email"
                    placeholder="Enter a valid email *"
                    value={formData.email}
                    onChange={handleChange}
                    _focus={{ borderColor: "#319795" }}
                    required
                  />
                  {isEmailError && <FormErrorMessage>Email is required.</FormErrorMessage>}
                </FormControl>

                {/* Message Field */}
                <FormControl id="message" isRequired isInvalid={isMessageError}>
                  <Textarea
                    variant={"unstyled"}
                    borderBottom={"1px solid #fff"}
                    borderRadius={"none"}
                    paddingBottom={"6px"}
                    color={"#fff"}
                    errorBorderColor="red.300"
                    name="message"
                    placeholder="Please type your message here *"
                    value={formData.message}
                    onChange={handleChange}
                    _focus={{ borderColor: "#319795" }}
                    required
                  />
                  {isMessageError && <FormErrorMessage>Message is required.</FormErrorMessage>}
                </FormControl>

                {/* Submit Button */}
                <Button
                mt={10}
                  type="submit"
                  color="#fff"
                  borderColor={"#319795"}
                  bg={"#319795"}
                  _hover={{ borderColor: "#fff", bg: "#fff", color: "#319795" }}
                  isLoading={loading}
                  rightIcon={<IoIosSend />}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Flex>
          <Flex
            direction={"column"}
            width={{ base: "100%", md: "70%" }}
            justify={"center"}
            align={"center"}
          >
            <Text
              as={"code"}
              color={"#9C9C9C"}
              fontSize={{ base: "1em", md: "1.3em" }}
              align={"center"}
              maxW={"800px"}
            >
              Hey! Thanx for reaching this point of my page. I'm sure you have questions about me,
              so don't be hesitate to contant me from that form on the left or by dropping an email
              to{" "}
              <Link color="teal.500" href="mailto:f.samaridis@gmail.com">
                f.samaridis@gmail.com
              </Link>
              .
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Stack>
  );
}
