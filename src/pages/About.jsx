import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Container maxW="container.md" p={4}>
    <Box p={4} bg="gray.50" borderRadius="md">
      <Heading as="h2" size="lg" mb={4}>About Me</Heading>
      <Text>Information about the blog author goes here...</Text>
    </Box>
  </Container>
);

export default About;