import {
  Box,
  Container,
  Fade,
  Flex,
  Grid,
  Heading,
  ScaleFade,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../components/header/Header";
import { useContext, useEffect, useRef, useState } from "react";
import ListingItems from "../components/listingComponents/ListingItems";
import { ListingContext } from "../store/context";
import SpinnerComponent from "../components/spinner/Spinner";
import useFetch from "../helper/customHooks/useFetch";
import NotFoundPage from "../components/NotFoundPage";

function Listing() {
  const { setPeopleData, setPlanetsData, planets, peoples, searchResult } =
    useContext(ListingContext);
  const inputText = useRef(null);
  const { data: fetchPeopleData, loading: loading1 } = useFetch(
    "https://swapi.dev/api/people"
  );
  const { data: fetchPlanetsData, loading: loading2 } = useFetch(
    "https://swapi.dev/api/planets"
  );

  useEffect(() => {
    if (loading1 == false) {
      setPeopleData(fetchPeopleData);
    }
    if (loading1 == false) {
      setPlanetsData(fetchPlanetsData);
    }
  }, [loading1, loading2]);

  return (
    <>
      <VStack minH={"100vh"} backgroundColor={"#F1F1F1"}>
        <Container
          backgroundColor={"#F8F8F8"}
          minH={"95vh"}
          centerContent
          marginTop={"1em"}
          minW={{ sm: "md", md: "xl", xl: "2xl" }}
          maxW={"6xl"}
          display="flex"
          flexDirection={"column"}
          boxShadow={"2xl"}
        >
          <Header ref={inputText} />
          {loading1 || loading2 ? (
            <SpinnerComponent />
          ) : (
            <>
              <Box as="main">
                <Flex
                  p={{ sm: "1", md: "3" }}
                  gap={"2"}
                  justifyContent={"center"}
                  alignItems={"start"}
                  mb={{ base: "8" }}
                  direction={{ base: "column", sm: "row" }}
                >
                  {peoples && (
                    <Container marginTop={"0em"}>
                      <ListingItems
                        data={
                          inputText.current?.value !== "" &&
                          Object.keys(searchResult).length !== 0
                            ? searchResult.people
                            : fetchPeopleData
                        }
                        category={"people"}
                      />
                    </Container>
                  )}
                  {planets && (
                    <Container>
                      <ListingItems
                        data={
                          inputText.current?.value !== "" &&
                          Object.keys(searchResult).length !== 0
                            ? searchResult.planets
                            : fetchPlanetsData
                        }
                        category={"planets"}
                      />
                    </Container>
                  )}
                  {Object.keys(searchResult).length !== 0 &&
                    searchResult.people.length == 0 &&
                    searchResult.planets.length == 0 &&
                    inputText.current.value !== "" && <NotFoundPage />}
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
