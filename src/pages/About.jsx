import { Box, Container, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const About = () => {
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <Container maxW="container.md" p={4}>
      <Box p={4} bg={bg} borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>About Me</Heading>
        <Text>Information about the blog author goes here...</Text>
      </Box>
    </Container>
  );
};

export default About;