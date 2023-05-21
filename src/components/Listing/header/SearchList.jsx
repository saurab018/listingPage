import { Box, Container } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListingContext } from "../../../store/context";

function SearchList({ searchResult, inputTextRef, setSearch }) {
  const { selectItem, peopleData, planetsData } = useContext(ListingContext);
  console.dir("search", searchResult);
  return (
    <Container
      position={"absolute"}
      top={"3em"}
      bg={"blue.300"}
      left={"1.3em"}
      transition={"0.3s ease-out"}
    >
      {searchResult
        // .filter((item) => item.name)
        .map((item, index) => (
          <Link
            key={index}
            to={
              item.url.includes("people")
                ? `/people/${index + 1}`
                : `/planets/${index + 1}`
            }
            onClick={() => {
              item.url.includes("people")
                ? selectItem(peopleData[index])
                : selectItem(planetsData[index]);
              inputTextRef.current = null;
              setSearch("");
            }}
          >
            <Box
              _hover={{ backgroundColor: "blue.200", cursor: "pointer" }}
              key={index}
              textAlign={"center"}
              shadow={"2"}
              columnGap={"2em"}
              minWidth={"16em"}
              transition={"0.3s ease-out"}
            >
              {item.name}
            </Box>
          </Link>
        ))}
    </Container>
  );
}

export default SearchList;
