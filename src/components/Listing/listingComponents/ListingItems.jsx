import {
  Box,
  Container,
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
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2,1fr)",
        }}
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
                    backgroundColor: "blue.200",
                    shadow: "md",
                  }}
                  sx={{
                    borderRadius: "1em",
                    shadow: "lg",
                    backgroundColor: "blue.300",
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
