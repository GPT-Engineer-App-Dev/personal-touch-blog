import { useState, useRef } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Textarea, VStack, Text, useColorModeValue, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "Blog Post Title", content: "Blog post content goes here...", tags: "" },
    { title: "Another Blog Post", content: "Another blog post content goes here...", tags: "" }
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "", tags: "" });
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const cancelRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([newPost, ...posts]);
    setNewPost({ title: "", content: "", tags: "" });
  };

  const openDeleteDialog = (post) => {
    setPostToDelete(post);
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setPostToDelete(null);
    setIsDeleteDialogOpen(false);
  };

  const handleDeletePost = () => {
    setPosts(posts.filter((post) => post !== postToDelete));
    closeDeleteDialog();
  };

  const bg = useColorModeValue("gray.50", "gray.700");
  const navBg = useColorModeValue("gray.100", "gray.900");

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg={navBg} p={4} mb={8} borderRadius="md" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          My Blog
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Stack>
      </Flex>
      <Box as="form" onSubmit={handleSubmit} mb={8}>
        <FormControl id="title" mb={4}>
          <FormLabel>Title</FormLabel>
          <Input type="text" name="title" value={newPost.title} onChange={handleInputChange} required />
        </FormControl>
        <FormControl id="content" mb={4}>
          <FormLabel>Content</FormLabel>
          <Textarea name="content" value={newPost.content} onChange={handleInputChange} required />
        </FormControl>
        <FormControl id="tags" mb={4}>
          <FormLabel>Tags</FormLabel>
          <Input type="text" name="tags" value={newPost.tags} onChange={handleInputChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Add Post</Button>
      </Box>
      
      <Flex direction={{ base: "column", md: "row" }} align="start">
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8} align="start">
            {posts.map((post, index) => (
              <Box key={index} p={4} bg={bg} borderRadius="md" w="full">
                <Flex justify="space-between" align="center">
                  <Heading as="h2" size="md" mb={2}>{post.title}</Heading>
                  <Button colorScheme="red" size="sm" onClick={() => openDeleteDialog(post)}>Delete</Button>
                </Flex>
                <Text>{post.content}</Text>
                {post.tags && <Text mt={2} color="gray.500">Tags: {post.tags}</Text>}
              </Box>
            ))}
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={4} align="start">
            <Box p={4} bg={bg} borderRadius="md" w="full">
              <Heading as="h3" size="sm" mb={2}>Recent Posts</Heading>
              {posts.slice(0, 3).map((post, index) => (
                <Text key={index}>{post.title}</Text>
              ))}
            </Box>
            <Box p={4} bg={bg} borderRadius="md" w="full">
              <Heading as="h3" size="sm" mb={2}>Categories</Heading>
              <Text>Category 1</Text>
              <Text>Category 2</Text>
              <Text>Category 3</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      <AlertDialog
        isOpen={isDeleteDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={closeDeleteDialog}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={closeDeleteDialog}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeletePost} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
};

export default Index;