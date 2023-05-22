import {
  Box,
  Container,
  Fade,
  Grid,
  GridItem,
  ScaleFade,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListingContext } from "../../../store/context";

const ListingItems = ({ data, category }) => {
  const { selectItem } = useContext(ListingContext);
  console.log("item", data);
  return (
    <>
      {data.length !== 0 && (
        <Fade in={category}>
          <Text
            fontSize={"4xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            marginBottom={"0.6em"}
            as="h2"
          >
            {category == "people" ? "People" : "Planets"}
          </Text>
        </Fade>
      )}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: data.length == 1 ? "repeat(1,1fr)" : "repeat(2,1fr)",
        }}
        justifyContent={"center"}
        gridGap={3}
      >
        {data.map((listItem, index) => (
          <Link key={index} to={`/${category}/${index + 1}`}>
            <GridItem>
              <ScaleFade initialScale={0.7} in={data.length > 0}>
                <Box
                  border="0.5em"
                  height={{ base: "8em", md: "11em", lg: "12em" }}
                  width={{ base: "15em", sm: "14em", md: "auto" }}
                  key={index}
                  padding="3"
                  gap="2"
                  _hover={{
                    cursor: "pointer",
                    backgroundColor:
                      category == "people" ? "#C4DCF2" : "#F1F4CD",
                    shadow: "md",
                    borderTop: "#333333",
                    color: "#333333",
                  }}
                  sx={{
                    borderRadius: "1em",
                    borderTop: "solid black",
                    shadow: "lg",
                    backgroundColor:
                      category == "people" ? "#D4EDF9" : "#F5F7DD",
                  }}
                  onClick={() => selectItem(listItem)}
                >
                  <Text
                    as="h4"
                    lineHeight="short"
                    fontWeight="semibold"
                    fontSize="xl"
                  >
                    Name: {listItem.name}
                  </Text>
                  {listItem.gender && (
                    <Text as="h4" lineHeight="short" fontSize="lg">
                      Gender:{" "}
                      {listItem.gender == "n/a" ? "Robot" : listItem.gender}
                    </Text>
                  )}
                  {listItem.eye_color && (
                    <Text as="h4" lineHeight="short" fontSize="lg">
                      Eye Color: {listItem.eye_color}
                    </Text>
                  )}

                  {listItem.climate && (
                    <Text as="h5" lineHeight="short" fontSize="lg">
                      Climate: {listItem.climate}
                    </Text>
                  )}
                  {listItem.diameter && (
                    <Text as="h5" lineHeight="short" fontSize="lg">
                      Diameter: {listItem.diameter}
                    </Text>
                  )}
                </Box>
              </ScaleFade>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default ListingItems;
