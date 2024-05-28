import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={8} borderRadius="md" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          My Blog
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Stack>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} align="start">
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8} align="start">
            <Box p={4} bg="gray.50" borderRadius="md" w="full">
              <Heading as="h2" size="md" mb={2}>Blog Post Title</Heading>
              <Text>Blog post content goes here...</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" w="full">
              <Heading as="h2" size="md" mb={2}>Another Blog Post</Heading>
              <Text>Another blog post content goes here...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={4} align="start">
            <Box p={4} bg="gray.50" borderRadius="md" w="full">
              <Heading as="h3" size="sm" mb={2}>Recent Posts</Heading>
              <Text>Recent post 1</Text>
              <Text>Recent post 2</Text>
              <Text>Recent post 3</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" w="full">
              <Heading as="h3" size="sm" mb={2}>Categories</Heading>
              <Text>Category 1</Text>
              <Text>Category 2</Text>
              <Text>Category 3</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;