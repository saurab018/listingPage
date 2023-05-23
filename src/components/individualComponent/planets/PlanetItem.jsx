import { Link as RouterLink } from "react-router-dom";
import { Box, Container, VStack } from "@chakra-ui/react";
import React from "react";
import HeaderContainer from "../../header/HeaderContainer";
import PlanetsCard from "./PlanetsCard";

function PlanetItem({ data, url }) {
  return (
    <VStack
      backgroundColor={"#E5E7CF"}
      justifyItems={"center"}
      color={"cyan.600"}
      minH={"100vh"}
    >
      <HeaderContainer>
        <Container display={"flex"} alignItems={"center"} width={"full"}>
          <RouterLink to={"/"}>
            <Box
              sx={{
                fontSize: "2xl",
                fontWeight: "bold",
                color: "black",
                marginLeft: "none",
                transition: "0.3s ease-in",
                ":hover": {
                  cursor: "pointer",
                  backgroundColor: "#D8DAC1",
                  rounded: "md",
                },
                paddingX: "0.5em",
              }}
            >
              Listing Page
            </Box>
          </RouterLink>
        </Container>
      </HeaderContainer>
      <PlanetsCard data={data} url={url} />
    </VStack>
  );
}

export default PlanetItem;
