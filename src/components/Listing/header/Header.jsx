import { Box, Button, Flex, Input, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { searchResultFunction } from "../../../helper/Functions";
import { ListingContext } from "../../../store/context";
import SearchList from "./SearchList";

function Header({}) {
  const { peopleData, planetsData, peoples, planets, setPeoples, setPlanets } =
    useContext(ListingContext);

  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const inputText = useRef();

  function onClickHandler(
    valueForPlanet,
    setPlanetFuntion,
    valueForPeople,
    setValueForPeople
  ) {
    setPlanetFuntion(valueForPlanet);
    setValueForPeople(valueForPeople);
  }

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value == "") {
      setSearchResult([]);
    }
  };

  useEffect(() => {
    const searchItem = searchResultFunction(
      { planets, peoples, planetsData, peopleData },
      search
    );
    if (searchItem.length > 0) {
      setSearchResult([...searchItem]);
    }
  }, [search, planets, peoples]);
  console.dir(searchResult);

  return (
    <Box>
      <Flex
        maxW={"2xl"}
        minWidth={{ base: "24em", sm: "36em", md: "40em", lg: "52em" }}
        direction={{ base: "column", md: "row" }}
        spacing="4"
        align="center"
        justifyContent="space-between"
        marginTop={"2em"}
        border={"1px solid black"}
      >
        <Box p="1" position={"relative"}>
          <Input
            type="text"
            onChange={onChangeHandler}
            placeholder="Search..."
            variant="outline"
            value={search}
            minWidth={"18em"}
            ref={inputText}
          />
          {search.length !== "" && searchResult.length > 0 ? (
            <SearchList
              setSearch={setSearch}
              searchResult={searchResult}
              inputTextRef={inputText}
            />
          ) : null}
        </Box>

        <Stack p="1" spacing="4" direction="row">
          <Button
            onClick={() => onClickHandler(false, setPlanets, true, setPeoples)}
            colorScheme="teal"
          >
            Peoples
          </Button>
          <Button
            onClick={() => onClickHandler(true, setPlanets, true, setPeoples)}
            colorScheme="green"
          >
            All
          </Button>
          <Button
            onClick={() => onClickHandler(true, setPlanets, false, setPeoples)}
            colorScheme="blue"
          >
            Planets
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Header;
