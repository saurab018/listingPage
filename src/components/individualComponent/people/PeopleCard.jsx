import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import AccordionComponent from "../../Accordion";
function PeopleCard({ data, url }) {
  const {
    birth_year,
    eye_color,
    films,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    name,
    skin_color,
    species,
    starship,
    vehicles,
  } = data;
  return (
    <Flex width={"100vw"} justifyContent={"center"}>
      <Container
        rounded={"3xl"}
        shadow={"2xl"}
        backgroundColor="#D4EDF9"
        _hover={{
          shadow: "4xl",
          boxShadow: "2xl",
          scale: "1.2",
        }}
        color={"#153364"}
      >
        <Box textAlign={"center"} marginTop={"1em"}>
          <Text as="h2" fontSize={"3xl"}>
            <strong>Person Details</strong>
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
              <strong>Gender: </strong>
              {gender}
            </Box>
            <Box>
              <strong>Birth Year: </strong> {birth_year}
            </Box>

            <Box>
              <strong>Eye Color: </strong> {eye_color}
            </Box>
            <Box>
              <strong>Hair Color: </strong> {hair_color}
            </Box>
            <Box>
              <strong>Height: </strong> {height}
            </Box>
            <Box>
              <strong>Mass: </strong> {mass}
            </Box>
            <Box>
              <strong>Skin Color: </strong> {skin_color}
            </Box>
            <Box>
              <strong>Homeworld: </strong>
              <Link href={homeworld} target="_blank" _hover={{ color: "blue" }}>
                Planet No
                {homeworld.substr(homeworld.length - 2, homeworld.length - 2)}
              </Link>
            </Box>
            <Box>
              <strong>Page URL: </strong>
              <Link href={url} target="_blank" _hover={{ color: "blue" }}>
                {`User ${url.id}`}
              </Link>
            </Box>
            <Box>
              <AccordionComponent
                data={starship}
                name={"StarShip"}
                notAvailable={"none"}
              />
            </Box>
            <Box>
              <AccordionComponent
                data={species}
                name={"Species"}
                notAvailable={"none"}
              />
            </Box>
            <Box>
              <AccordionComponent
                data={vehicles}
                name={"Vehicles"}
                notAvailable={"none"}
              />
            </Box>
            <Box>
              {
                <AccordionComponent
                  data={films}
                  name={"Films"}
                  notAvailable={"none"}
                />
              }
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
  );
}

export default PeopleCard;
