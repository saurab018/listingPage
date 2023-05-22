import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AccordionComponent from "../../../Accordion";

function PlanetItem({ data, url }) {
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
    <VStack align="start" color={"cyan.600"} minH={"100vh"}>
      <Flex gap={2} marginTop={4} width={"100vw"}>
        <Box
          sx={{
            fontSize: "2xl",
            fontWeight: "bold",
            color: "black",
            marginLeft: "1em",
            ":hover": {
              color: "blue",
            },
          }}
        >
          Listing Page
        </Box>
      </Flex>
      <Flex width={"100vw"} justifyContent={"center"}>
        <Container
          maxWidth="lg"
          border="1px solid gray"
          minH={"35em"}
          padding={4}
          rounded={"3xl"}
          shadow={"2xl"}
          boxShadow={"2xl"}
          transition={"0.3s ease-out"}
          _hover={{
            shadow: "xl",
            scale: "1.2",
          }}
          minW={"21.9em"}
        >
          <Box border={"1px solid black"}>
            <Button
              // sx={{ marginLeft: "auto", mr: "1em" }}
              marginLeft={"auto"}
              onClick={() => history.back()}
              colorScheme="teal"
            >
              Peoples
            </Button>
          </Box>
          <Box marginTop={"0.5em"}>
            <Box as="h2" fontSize="2xl" fontWeight="bold" marginBottom={4}>
              {name}
            </Box>
            <Box>
              <strong>Climate: </strong>
              {climate}
            </Box>
            <Box>
              <strong>Gravity: </strong>
              {gravity}
            </Box>
            <Box>
              <strong>Population:</strong> {population}
            </Box>
            <Box>
              <strong>Diameter: </strong>
              {diameter}
            </Box>
            <Box>
              <strong>Orbital Period: </strong>
              {orbital_period}
            </Box>
            <Box>
              <strong>Surface Water: </strong>
              {surface_water}
            </Box>

            <Box>
              <strong>Rotation Period: </strong>
              {rotation_period}
            </Box>
            <Box>
              <strong>Terrain: </strong>
              {terrain}
            </Box>
            <Box>
              <strong>Page URL: </strong>
              <Link href={url} target="_blank" _hover={{ color: "blue" }}>
                {`User ${url.id}`}
              </Link>
            </Box>
            <Box>
              <AccordionComponent
                data={residents}
                name={"Residents"}
                notAvailable={"Non-habitable"}
              />
            </Box>
            <Box>
              <AccordionComponent
                data={films}
                name={"Films"}
                notAvailable={"None"}
              />
            </Box>
          </Box>
        </Container>
      </Flex>
    </VStack>
  );
}

export default PlanetItem;
