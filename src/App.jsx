import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, useColorMode, Button, Stack, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box>
        <Flex as="nav" bg={colorMode === "light" ? "gray.100" : "gray.900"} p={4} mb={8} borderRadius="md" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            My Blog
          </Heading>
          <Stack direction="row" spacing={4} align="center">
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
          </Stack>
        </Flex>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;