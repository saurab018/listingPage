import { Button, Stack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ListingContext } from "../../store/context";

function Buttons() {
  const { peoples, planets, setPeoples, setPlanets } =
    useContext(ListingContext);
  function onClickHandler(
    valueForPlanet,
    setPlanetFuntion,
    valueForPeople,
    setValueForPeople
  ) {
    setPlanetFuntion(valueForPlanet);
    setValueForPeople(valueForPeople);
  }

  return (
    <>
      <Stack
        position={"relative"}
        width={"inherit"}
        p="1"
        spacing="4"
        direction="row"
        marginRight={"auto"}
        marginLeft={{ sm: "auto" }}
        marginY={"0.30em"}
        backgroundColor={"#036884"}
        minW={{ sm: "29em", md: "49em" }}
        justifyContent={{ base: "center", md: "start" }}
      >
        <Button
          onClick={() => onClickHandler(false, setPlanets, true, setPeoples)}
          bgColor="#036884"
          color="#FDFAF2"
          isActive={planets == false && peoples == true ? true : false}
          marginLeft={{ base: "1.5em", sm: "2em", md: "3em" }}
          top={"0.25em"}
          rounded={"none"}
          _hover={{ borderBottom: "0.3em solid white" }}
          _active={{
            borderBottom: "0.2em solid white",
            bgColor: "#69B4F0",
            color: "#34332F",
          }}
        >
          Peoples
        </Button>

        <Button
          onClick={() => onClickHandler(true, setPlanets, false, setPeoples)}
          bgColor="#036884"
          color="#FDFAF2"
          isActive={planets == true && peoples == false ? true : false}
          top={"0.25em"}
          right={{ base: "1.3em", md: "0.5em", lg: "1em" }}
          rounded={"none"}
          _hover={{ borderBottom: "0.3em solid white" }}
          _active={{
            borderBottom: "0.2em solid white",
            bgColor: "#B5BE5B",
            color: "#34332F",
          }}
        >
          Planets
        </Button>
        <Button
          onClick={() => onClickHandler(true, setPlanets, true, setPeoples)}
          bgColor="#036884"
          color="#FDFAF2"
          isActive={peoples && planets}
          top={"0.25em"}
          right={{ base: "2.3em", md: "1em", lg: "2.1em" }}
          rounded={"none"}
          paddingLeft={"2em"}
          paddingRight={"2.2em"}
          _hover={{ borderBottom: "0.3em solid white" }}
          _active={{
            borderBottom: "0.2em solid white",
            bgColor: "#5FBCB3",
            color: "#34332F",
          }}
        >
          All
        </Button>
      </Stack>
    </>
  );
}

export default Buttons;
