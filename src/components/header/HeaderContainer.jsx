import { Box, Flex } from "@chakra-ui/react";
import React from "react";

function HeaderContainer({ children }) {
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
        {children}
      </Flex>
    </Box>
  );
}

export default HeaderContainer;
