import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import {
  forwardRef,
  useContext,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import { searchResultFunction } from "../../../helper/Functions";
import { ListingContext } from "../../../store/context";
import SearchList from "./SearchList";

function Header({}, ref) {
  const {
    peopleData,
    planetsData,
    peoples,
    planets,
    setPeoples,
    setPlanets,
    searchResult,
    setSearchResult,
  } = useContext(ListingContext);

  const [searchTerm, setSearchTerm] = useState("");

  const deferedSearchTerm = useDeferredValue(searchTerm);
  console.log("sea", searchTerm);

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
    setSearchTerm(e.target.value);
    if (e.target.value == "") {
      setSearchResult([]);
    }
  };

  useEffect(() => {
    const searchItem = searchResultFunction(
      { planets, peoples, planetsData, peopleData },
      searchTerm
    );
    console.log("===", Object.keys(searchItem) == 0);

    if (Object.keys(searchItem) !== 0) {
      setSearchResult({ ...searchItem });
    }
    if (Object.keys(searchItem) == 0 && searchTerm !== "") {
      setSearchResult({ name: "No Result Found" });
    }
  }, [deferedSearchTerm, planets, peoples]);

  return (
    <Box width={"100%"} paddingX={"1em"}>
      <Flex
        direction={{ base: "column" }}
        // minW={{ sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
        spacing="4"
        align="center"
        justifyContent="space-between"
        marginTop={"2em"}
        border={"1px solid black"}
      >
        {/* <Stack */}
        {/* p="1"
          spacing="4"
          direction="row"
          marginRight={"auto"}
          marginLeft={{ sm: "auto", md: "3em" }}
          marginY={"0.30em"} */}
        {/* > */}
        <Tabs
          p="1"
          spacing="4"
          direction="row"
          marginRight={"auto"}
          marginLeft={{ sm: "auto", md: "3em" }}
          marginY={"0.30em"}
        >
          <TabList>
            <Tab
              sx={{ colorScheme: peoples ? "blue" : "gray" }}
              onClick={() =>
                onClickHandler(false, setPlanets, true, setPeoples)
              }
            >
              Button 1
            </Tab>
            <Tab>Button 2</Tab>
            <Tab>Button 3</Tab>
          </TabList>
        </Tabs>
        {/* <Button
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
          </Button> */}
        {/* </Stack> */}
        <Box p="1" position={"relative"} marginLeft={{ md: "auto" }}>
          <Input
            type="text"
            onChange={onChangeHandler}
            placeholder="Search..."
            variant="outline"
            value={searchTerm}
            minWidth={"18em"}
            ref={ref}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header = forwardRef(Header);
