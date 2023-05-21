import { Box, Container, Fade } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListingContext } from "../../../store/context";

function SearchList({ searchResult, inputTextRef, setSearch }) {
  const { selectItem, peopleData, planetsData } = useContext(ListingContext);
  console.dir("search", searchResult);
  return (
    <Container
      position={"absolute"}
      top={"2.9em"}
      backgroundColor={"blue.400"}
      left={"1.3em"}
      opacity={searchResult.length > 0 ? 1 : 0}
      transform={
        searchResult.length > 0 ? "translateY(0)" : "translateY(-20px)"
      }
      roundedBottom={"md"}
      transition={"all 0.5s ease-out"}
    >
      {searchResult.map((item, index) =>
        item.id == "*" && item.name == "No Result Found" ? (
          <Fade in={searchResult.length > 0}>
            <Box
              opacity={searchResult.length > 0 ? 1 : 0}
              transform={
                searchResult.length > 0 ? "translateX(0)" : "translateX(-20px)"
              }
              transition={"all 0.5s ease-out"}
            >
              {item.name}
            </Box>
          </Fade>
        ) : (
          <Link
            key={index}
            to={
              item.url && item.url.includes("people")
                ? `/people/${index + 1}`
                : `/planets/${index + 1}`
            }
            onClick={() => {
              item.url && item.url.includes("people")
                ? selectItem(peopleData[index])
                : selectItem(planetsData[index]);
              inputTextRef.current = null;
              setSearch("");
            }}
          >
            <Fade in={searchResult.length > 0}>
              <Box
                _hover={{
                  backgroundColor: "blue.200",
                  cursor: "pointer",
                  borderBottom: "0.1em solid gray",
                }}
                key={index}
                textAlign={"center"}
                minWidth={"16em"}
                transition={"0.2s ease-out"}
                marginTop={"none"}
                paddingBottom={"0.2em"}
                borderTop={"0.1em solid white"}
                opacity={searchResult.length > 0 ? 1 : 0}
                transform={
                  searchResult.length > 0
                    ? "translateX(0)"
                    : "translateX(-20px)"
                }
                transitionDelay={`${index * 0.1}s`}
              >
                {item.name}
              </Box>
            </Fade>
          </Link>
        )
      )}
    </Container>
  );
}

export default SearchList;
