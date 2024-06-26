import { Box, Container, VStack, Heading, SimpleGrid, Image, Text, Button } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the newest features.",
    price: "$699",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Keep track of your health and notifications.",
    price: "$299",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Electronics Store</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {products.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={product.imageUrl} alt={product.name} mb={4} />
              <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
              <Text mb={2}>{product.description}</Text>
              <Text fontWeight="bold" mb={4}>{product.price}</Text>
              <Button colorScheme="teal">Add to Cart</Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;