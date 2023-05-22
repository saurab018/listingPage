import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  LinkBox,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import AccordionComponent from "../../../Accordion";

function PeopleItem({ data, url }) {
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
  // console.log("data", data);

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
          minW={{ base: "17em", sm: "21.9em" }}
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
              {/* <strong>Films:</strong> */}

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
      </Flex>
    </VStack>
  );
}

export default PeopleItem;
