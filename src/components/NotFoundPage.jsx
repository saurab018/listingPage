import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

function NotFoundPage() {
  return (
    <Container
      width={"fill"}
      height={"fill"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text as="h1" sx={{ fontSize: "2xl" }}>
        <strong>No Result Found</strong>
      </Text>
    </Container>
  );
}

export default NotFoundPage;
