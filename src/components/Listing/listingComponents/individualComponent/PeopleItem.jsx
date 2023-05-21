import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  ListIcon,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

function PeopleItem({ data }) {
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
    // <VStack>
    //   <Flex justifyContent={"start"} gap="2" marginY={"4"}>
    //     <IconButton
    //       aria-label="Back To Previous Page"
    //       icon={<ArrowBackIcon />}
    //       color={"blackAlpha.600"}
    //     />
    //   </Flex>
    //   <Container
    //     marginTop={"4em"}
    //     maxWidth={"lg"}
    //     minW={"md"}
    //     border={"0.3em solid gray"}
    //     padding={"1em"}
    //   >
    //     <Box border={"0.4em"}>
    //       <Box>Name: {name}</Box>
    //       <Box>
    //         gender:
    //         <Badge colorScheme={gender == "male" ? "green" : "purple"}>
    //           {gender}
    //         </Badge>
    //       </Box>
    //       <Box>Birth Year: {birth_year}</Box>
    //       <Box>eye color: {eye_color}</Box>
    //       <Box>hair color: {hair_color}</Box>
    //       <Box>height: {height}</Box>
    //       <Box>mass: {mass}</Box>
    //       <Box>skin color: {skin_color}</Box>
    //       <Box>starships: {starship}</Box>
    //       <Box>species: {species}</Box>
    //       <Box>vechiles: {vehicles}</Box>
    //       <Box>films: {films}</Box>
    //       <Box>home world: {homeworld}</Box>
    //     </Box>
    //   </Container>
    // </VStack>
    <VStack spacing={4} align="start" padding={4} color={"cyan.600"}>
      <Flex gap={2} marginTop={4} width={"100vw"}>
        <Box
          sx={{
            fontSize: "2xl",
            fontWeight: "bold",
            color: "black",
            cursor: "pointer",
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
          <Box>
            <Box as="h2" fontSize="2xl" fontWeight="bold" marginBottom={4}>
              {name}
            </Box>
            <Box>
              <strong>Gender:</strong>
              <Badge colorScheme={gender == "male" ? "green" : "purple"}>
                {gender}
              </Badge>
            </Box>
            <Box>
              <strong>Birth Year:</strong> {birth_year}
            </Box>
            <Box>
              <strong>Eye Color:</strong> {eye_color}
            </Box>
            <Box>
              <strong>Hair Color:</strong> {hair_color}
            </Box>
            <Box>
              <strong>Height:</strong> {height}
            </Box>
            <Box>
              <strong>Mass:</strong> {mass}
            </Box>
            <Box>
              <strong>Skin Color:</strong> {skin_color}
            </Box>
            <Box>
              <strong>Starships:</strong> {starship}
            </Box>
            <Box>
              <strong>Species:</strong> {species}
            </Box>
            <Box>
              <strong>Vehicles:</strong> {vehicles}
            </Box>
            <Box>
              <strong>Films:</strong>
              <UnorderedList>
                {films.length > 0 &&
                  films.map((film, index) => (
                    <ListItem key={index}>{film}</ListItem>
                  ))}
              </UnorderedList>
            </Box>
            <Box>
              <strong>Homeworld:</strong> {homeworld}
            </Box>
          </Box>
        </Container>
      </Flex>
    </VStack>
  );
}

export default PeopleItem;
