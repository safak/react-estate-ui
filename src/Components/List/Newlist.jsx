import React, { useState } from "react";
import { Box, Image, Text, Badge, Button } from "@chakra-ui/react";
import { listData } from "../../Lib/dummydata";
import { Link } from "react-router-dom";
import "./List.scss";

const Newlist = () => {
  const [visibleItems, setVisibleItems] = useState(6); // Initially show 6 items

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6); // Show 6 more items
  };

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={6}
      >
        {listData.slice(0, visibleItems).map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            transition="box-shadow 0.2s ease-in-out" // Smooth transition
            _hover={{ boxShadow: "lg" }} // Slight shadow on hover
          >
            <Link to={`/${item.id}`}>
              <Image
                src={item.img}
                alt={item.title}
                width="90%"
                height="150px"
                objectFit="cover"
              />
            </Link>

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {item.bedroom} Beds
                </Badge>
                <Badge borderRadius="full" px="2" ml={2} colorScheme="orange">
                  {item.bathroom} Baths
                </Badge>
              </Box>
              <Link to={`${item.id}`}>
                <Box
                  mt="2"
                  mb="2"
                  color="#00111"
                  fontWeight="normal"
                  as="h4"
                  lineHeight="tight"
                >
                  {item.title}
                </Box>
              </Link>
              <Box color="#000" fontWeight="700">
                ₹{item.price}/night
              </Box>

              <Box mt="2">
                <Text fontSize="sm">{item.address}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* View More Button */}
      {visibleItems < listData.length && (
        <Box textAlign="center" mt={6}>
          <Button
            fontSize="15px"
            fontWeight="400"
            className="btn"
            colorScheme="teal"
            onClick={handleViewMore}
          >
            View More
          </Button>
        </Box>
      )}
    </>
  );
};

export default Newlist;
