import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Stack } from "@chakra-ui/react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS send function
    emailjs
      .send(
        "service_6n7o48n", // Replace with your EmailJS service ID
        "template_0rba8au", // Replace with your EmailJS template ID
        formData, // The form data to send
        "Qr--64P6U1YsFHrAX" // Replace with your EmailJS public key
      )
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.error("FAILED...", err);
      });
  };

  return (
    <Box maxW="500px" mx="auto" mt="20">
      {success && (
        <Box bg="green.100" p={4} borderRadius="md">
          Your message has been sent successfully!
        </Box>
      )}
      {error && (
        <Box bg="red.100" p={4} borderRadius="md">
          Failed to send the message. Please try again.
        </Box>
      )}

      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleChange} required />
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            isLoading={loading} // Show loading spinner if form is submitting
          >
            Send Message
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
