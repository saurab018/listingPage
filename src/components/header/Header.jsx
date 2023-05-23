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
import { searchResultFunction } from "../../helper/Functions";
import { ListingContext } from "../../store/context";
import { Search2Icon } from "@chakra-ui/icons";
import Buttons from "./Buttons";
import HeaderContainer from "./HeaderContainer";

function Header({}, ref) {
  const { peopleData, planetsData, peoples, planets, setSearchResult } =
    useContext(ListingContext);

  const [searchTerm, setSearchTerm] = useState("");

  const deferedSearchTerm = useDeferredValue(searchTerm);

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

    if (Object.keys(searchItem) !== 0) {
      setSearchResult({ ...searchItem });
    }
    if (Object.keys(searchItem) == 0 && searchTerm !== "") {
      setSearchResult({ name: "No Result Found" });
    }
  }, [deferedSearchTerm, planets, peoples]);

  return (
    <HeaderContainer>
      <Buttons />

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
    </HeaderContainer>
  );
}

export default Header = forwardRef(Header);
