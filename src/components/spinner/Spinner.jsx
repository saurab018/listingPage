import { Box, Flex, Spinner } from "@chakra-ui/react";

function SpinnerComponent() {
  return (
    <Flex alignItems="center" justifyContent="center" marginTop="10">
      <Spinner
        speed="0.60s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        thickness="0.25em"
      />
    </Flex>
  );
}

export default SpinnerComponent;
