import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
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
import { Search2Icon } from "@chakra-ui/icons";

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
      deferedSearchTerm
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
    <Box minW={{ sm: "30em", md: "50em" }} paddingX={"1em"}>
      <Flex
        direction={{ base: "column" }}
        spacing="4"
        align="center"
        justifyContent="space-between"
        marginTop={"2em"}
        border={"1px solid black"}
      >
        <Stack
          position={"relative"}
          width={"inherit"}
          p="1"
          spacing="4"
          direction="row"
          marginRight={"auto"}
          marginLeft={{ sm: "auto" }}
          marginY={"0.30em"}
          backgroundColor={"#5A5A5A"}
          minW={{ sm: "29em", md: "49em" }}
          justifyContent={{ base: "center", md: "start" }}
        >
          <Button
            onClick={() => onClickHandler(false, setPlanets, true, setPeoples)}
            colorScheme="#5A5A5A"
            isActive={peoples}
            marginLeft={"3em"}
            top={"0.25em"}
            rounded={"none"}
            _hover={{ borderBottom: "0.3em solid white" }}
            _active={{ borderBottom: "0.2em solid white" }}
          >
            Peoples
          </Button>

          <Button
            onClick={() => onClickHandler(true, setPlanets, false, setPeoples)}
            colorScheme="#5A5A5A"
            isActive={planets}
            // marginLeft={"3em"}
            top={"0.25em"}
            right={"0.5em"}
            rounded={"none"}
            _hover={{ borderBottom: "0.3em solid white" }}
            _active={{ borderBottom: "0.2em solid white" }}
          >
            Planets
          </Button>
          <Button
            onClick={() => onClickHandler(true, setPlanets, true, setPeoples)}
            colorScheme="#5A5A5A"
            isActive={peoples && planets}
            top={"0.25em"}
            right={"1.0em"}
            rounded={"none"}
            _hover={{ borderBottom: "0.3em solid white" }}
            _active={{ borderBottom: "0.2em solid white" }}
          >
            All
          </Button>
        </Stack>
        <Box
          p="1"
          position={"relative"}
          marginLeft={{ md: "auto" }}
          marginTop={"1em"}
        >
          <InputGroup>
            <Input
              type="text"
              onChange={onChangeHandler}
              placeholder="Search..."
              variant="outline"
              value={searchTerm}
              minWidth={"18em"}
              ref={ref}
              border={"0.2em solid black"}
            />
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header = forwardRef(Header);
