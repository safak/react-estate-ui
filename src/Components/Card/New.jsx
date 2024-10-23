import {
  Box,
  Image,
  Text,
  Badge,
  Stack,
  Flex,
  Icon,
  Button,
  HStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons"; // Correct import for the icons

const AirbnbCard = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      {/* Property Image */}
      <Image
        src="https://bit.ly/2Z4KKcF"
        alt="Airbnb Property"
        objectFit="cover"
        w="100%"
        h="200px"
      />

      {/* Card Content */}
      <Box p="6">
        <Flex alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Text
            color="gray.500"
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            ml="2"
          >
            3 beds • 2 baths
          </Text>
        </Flex>

        {/* Title and Location */}
        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Modern home in city center
        </Text>
        <Text color="gray.500">New York, USA</Text>

        {/* Rating and Price */}
        <Flex justifyContent="space-between" alignItems="center" mt="3">
          <HStack spacing="1">
            <StarIcon color="teal.500" />
            <StarIcon color="teal.500" />
            <StarIcon color="teal.500" />
            <StarIcon color="teal.500" />
            <StarIcon color="gray.300" />
            <Text fontSize="sm">(34)</Text>
          </HStack>
          <Text fontSize="lg" fontWeight="bold">
            $120/night
          </Text>
        </Flex>

        {/* Action Button */}
        <Button mt="4" w="full" colorScheme="teal" variant="outline" size="sm">
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default AirbnbCard;
