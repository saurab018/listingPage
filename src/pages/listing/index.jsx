import { Box, Container, Flex, Grid, Stack, VStack } from "@chakra-ui/react";
import Header from "../../components/Listing/header/Header";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../helper/customHooks/useFetch";
import ListingItems from "../../components/Listing/listingComponents/ListingItems";
import { ListingContext } from "../../store/context";
import SpinnerComponent from "../../components/spinner/Spinner";

function Listing() {
  const { peopleData, planetsData, loading1, loading2, planets, peoples } =
    useContext(ListingContext);

  // console.log("people", peopleData);
  // console.log("planets", planetsData);

  return (
    <>
      <VStack sx={{ backgroundColor: "blue.100" }}>
        <Container
          centerContent
          // minW={{ sm: "37.5em", md: "md" }}
          maxW={"6xl"}
          display="flex"
          flexDirection={"column"}
          border={"1px solid black"}
        >
          <Header />
          {loading1 || loading2 ? (
            <SpinnerComponent />
          ) : (
            <>
              <Box as="main">
                <Flex
                  p={{ sm: "1", md: "3" }}
                  gap={"2"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={{ base: "4", md: "10" }}
                  direction={{ base: "column", sm: "row" }}
                >
                  {peoples && (
                    <Container>
                      <Box
                        textAlign={"center"}
                        fontSize={"4xl"}
                        fontWeight={"bold"}
                        as="h2"
                      >
                        People
                      </Box>
                      <ListingItems data={peopleData} category={"people"} />
                    </Container>
                  )}
                  {planets && (
                    <Container>
                      <Box
                        fontSize={"4xl"}
                        textAlign={"center"}
                        fontWeight={"bold"}
                        as="h2"
                      >
                        Planets
                      </Box>
                      <ListingItems data={planetsData} category={"planets"} />
                    </Container>
                  )}
                </Flex>
              </Box>
            </>
          )}
        </Container>
      </VStack>
    </>
  );
}

export default Listing;
