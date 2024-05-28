import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => (
  <Container maxW="container.md" p={4}>
    <Box p={4} bg="gray.50" borderRadius="md">
      <Heading as="h2" size="lg" mb={4}>Contact</Heading>
      <Text>Contact information goes here...</Text>
    </Box>
  </Container>
);

export default Contact;