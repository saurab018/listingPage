import { Box, Container, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import HeaderContainer from "../../../header/HeaderContainer";
import PeopleCard from "./PeopleCard";

function PeopleItem({ data, url }) {
  return (
    <VStack
      backgroundColor={"#BFD6E1"}
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
                  backgroundColor: "#B1CCD8",
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
      <PeopleCard data={data} url={url} />
    </VStack>
  );
}

export default PeopleItem;
