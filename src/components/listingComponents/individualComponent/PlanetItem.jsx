import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AccordionComponent from "../../Accordion";
import HeaderContainer from "../../header/HeaderContainer";

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
    <VStack
      backgroundColor={"#E5E7CF"}
      justifyItems={"center"}
      color={"cyan.600"}
      minH={"100vh"}
    >
      <HeaderContainer>
        <Container display={"flex"} alignItems={"center"} width={"full"}>
          <RouterLink to={"/"}>
            <Box
              sx={{
                fontSize: "2xl",
                fontWeight: "bold",
                color: "black",
                marginLeft: "none",
                transition: "0.3s ease-in",
                ":hover": {
                  cursor: "pointer",
                  backgroundColor: "#D8DAC1",
                  rounded: "md",
                },
                paddingX: "0.5em",
              }}
            >
              Listing Page
            </Box>
          </RouterLink>
        </Container>
      </HeaderContainer>
      <Flex width={"100vw"} justifyContent={"center"} marginTop={"2em"}>
        <Container
          rounded={"3xl"}
          shadow={"2xl"}
          boxShadow={"2xl"}
          backgroundColor={"#F5F7DD"}
          _hover={{
            shadow: "3xl",
            scale: "1.2",
          }}
        >
          <Box textAlign={"center"} marginTop={"1em"}>
            <Text as="h2" fontSize={"3xl"}>
              <strong>Planets Details</strong>
            </Text>
          </Box>
          <Container
            maxWidth="lg"
            minW={{ base: "17em", sm: "21.9em" }}
            minH={"30em"}
            padding={4}
            roundedBottom={"none"}
            transition={"0.3s ease-out"}
          >
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
          <Container display={"flex"} roundedBottom={"3xl"} minHeight={"5em"}>
            <Button
              marginLeft={"auto"}
              marginTop={"1em"}
              marginRight={"1em"}
              onClick={() => history.back()}
              backgroundColor="blue.500"
              color={"white"}
              _hover={{ color: "black", backgroundColor: "blue.300" }}
            >
              Back
            </Button>
          </Container>
        </Container>
      </Flex>
    </VStack>
  );
}

export default PlanetItem;
