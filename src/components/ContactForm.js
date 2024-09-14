import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Container,
  useToast,
  Heading,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const toast = useToast(); // Initialize the toast function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6n7o48n", // Replace with your actual EmailJS Service ID
        "template_0rba8au", // Replace with your actual EmailJS Template ID
        formData, // The form data to send
        "Qr--64P6U1YsFHrAX" // Replace with your actual EmailJS User/Public Key
      )
      .then((response) => {
        setLoading(false);
        toast({
          title: "Thank you for your message!",
          description: "Your message has been sent successfully.",
          status: "success",
          duration: 5000, // Display the toast for 5 seconds
          isClosable: true,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
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
    <Stack position={"relative"} w={"100%"} bg={"#fff"}>
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
          color={"#000"}
          as={"h2"}
          fontSize={{ base: "2em", md: "3em" }}
        >
          Contact Me
        </Heading>
        <Box maxW="800px" mx="auto" >
          <form onSubmit={handleSubmit} style={{maxWidth: '800px'}}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  errorBorderColor="red.300"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  errorBorderColor="red.300"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  errorBorderColor="red.300"
                  name="message"
                  placeholder="Please type your message here."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <Button type="submit" colorScheme="blue" isLoading={loading}>
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </Stack>
  );
}
