import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, IconButton, VStack } from "@chakra-ui/react";
import React from "react";

function PlanetItem({ data }) {
  console.log(data);
  const {
    climate,
    diameter,
    films,
    gravity,
    name,
    orbital_period,
    population,
    residents,
    rotation_period,
    surface_water,
    terrain,
  } = data;
  return (
    <VStack spacing={4} align="start" padding={4}>
      <Flex gap={2} marginTop={4} width={"100vw"}>
        <IconButton
          aria-label="Back To Previous Page"
          icon={<ArrowBackIcon />}
          colorScheme="Cyan 600"
          variant="ghost"
        />
      </Flex>
      <Flex width={"100vw"} justifyContent={"center"}>
        <Container
          maxWidth="lg"
          border="1px solid gray"
          padding={4}
          rounded={"3xl"}
          shadow={"2xl"}
          boxShadow={"white"}
          transition={"0.3s ease-out"}
          _hover={{
            shadow: "xl",
            cursor: "pointer",
            scale: "1.2",
            // translate: "1.5em 1.5em",
          }}
        >
          <Box>Name: {name}</Box>
          <Box>Climate: {climate}</Box>
          <Box>Gravity: {gravity}</Box>
          <Box>Population: {population}</Box>
          <Box>Diameter: {diameter}</Box>
          <Box>Orbital Period: {orbital_period}</Box>
          <Box>Surface Water: {surface_water}</Box>
          {/* <Box>Residents: {residents}</Box> */}
          <Box>Rotation Period: {rotation_period}</Box>
          <Box>Terrain: {terrain}</Box>
          {/* <Box>Films: {films}</Box> */}
        </Container>
      </Flex>
    </VStack>
  );
}

export default PlanetItem;
