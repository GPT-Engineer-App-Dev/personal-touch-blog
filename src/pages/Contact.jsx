import { Box, Container, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Contact = () => {
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <Container maxW="container.md" p={4}>
      <Box p={4} bg={bg} borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>Contact</Heading>
        <Text>Contact information goes here...</Text>
      </Box>
    </Container>
  );
};

export default Contact;