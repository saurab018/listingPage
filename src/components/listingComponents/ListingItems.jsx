import { Box, Fade, Grid, GridItem, ScaleFade, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListingContext } from "../../store/context";
import ListingCard from "./ListingCard";

const ListingItems = ({ data, category }) => {
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
              <ListingCard
                listItem={listItem}
                data={data}
                index={index}
                category={category}
              />
            </GridItem>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default ListingItems;
