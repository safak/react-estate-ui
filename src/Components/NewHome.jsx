import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  SimpleGrid,
  Badge,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { listData } from "../Lib/dummydata";

const HomePagee = () => {
  return (
    <Box>
      {/* Navbar */}
      <Box as="nav" bg="blue.600" py={4} color="white">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading size="lg">ResortHub</Heading>
            <Button colorScheme="teal" variant="outline">
              Sign In
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        as="section"
        bgImage="url('https://example.com/hero.jpg')"
        bgSize="cover"
        bgPos="center"
        py={24}
      >
        <Container maxW="container.xl">
          <VStack spacing={6} textAlign="center" color="white">
            <Heading as="h1" size="2xl" fontWeight="bold">
              Discover the Best Resorts for Your Perfect Getaway
            </Heading>
            <Text fontSize="lg">
              Find luxurious resorts near you for an unforgettable vacation
              experience.
            </Text>
            <InputGroup size="lg" maxW="lg" mt={4}>
              <Input placeholder="Search for resorts..." />
              <InputRightElement children={<SearchIcon color="blue.500" />} />
            </InputGroup>
          </VStack>
        </Container>
      </Box>

      {/* Resort Listings */}
      <Box as="section" py={12}>
        <Container maxW="container.xl">
          <Heading mb={8}>Top Resorts</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {listData.map((resort) => (
              <Box
                key={resort.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image
                  src={resort.img}
                  alt={resort.title}
                  height="200px"
                  width="100%"
                  objectFit="cover"
                />
                <Box p={6}>
                  <Badge colorScheme="blue" mb={2}>
                    {resort.bedroom} Bedroom | {resort.bathroom} Bathroom
                  </Badge>
                  <Heading as="h3" size="md" mb={2}>
                    {resort.title}
                  </Heading>
                  <Text fontSize="lg" fontWeight="bold" color="teal.500">
                    ${resort.price}/night
                  </Text>
                  <Text fontSize="sm" mt={2} color="gray.600">
                    {resort.address}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.600" py={6} color="white">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2024 ResortHub. All rights reserved.</Text>
            <Flex>
              <Button variant="link" color="white" mr={4}>
                Privacy Policy
              </Button>
              <Button variant="link" color="white">
                Terms of Service
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePagee;
