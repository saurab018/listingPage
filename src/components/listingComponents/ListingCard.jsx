import { Box, ScaleFade, Text } from "@chakra-ui/react";
import { ListingContext } from "../../store/context";
import { useContext } from "react";

function ListingCard({ data, listItem, index, category }) {
  const { selectItem } = useContext(ListingContext);

  return (
    <ScaleFade initialScale={0.7} in={data.length > 0}>
      <Box
        border="0.5em"
        height={{ base: "8em", md: "11em", lg: "12em" }}
        width={{ base: "15em", sm: "14em", md: "auto" }}
        key={index}
        padding="3"
        gap="2"
        _hover={{
          cursor: "pointer",
          backgroundColor: category == "people" ? "#C4DCF2" : "#F1F4CD",
          shadow: "md",
          borderTop: "#333333",
          color: "#333333",
        }}
        sx={{
          borderRadius: "1em",
          borderTop: "solid black",
          shadow: "lg",
          backgroundColor: category == "people" ? "#D4EDF9" : "#F5F7DD",
        }}
        onClick={() => selectItem(listItem)}
      >
        <Text as="h4" lineHeight="short" fontWeight="semibold" fontSize="xl">
          Name: {listItem.name}
        </Text>
        {listItem.gender && (
          <Text as="h4" lineHeight="short" fontSize="lg">
            Gender: {listItem.gender == "n/a" ? "Robot" : listItem.gender}
          </Text>
        )}
        {listItem.eye_color && (
          <Text as="h4" lineHeight="short" fontSize="lg">
            Eye Color: {listItem.eye_color}
          </Text>
        )}

        {listItem.climate && (
          <Text as="h5" lineHeight="short" fontSize="lg">
            Climate: {listItem.climate}
          </Text>
        )}
        {listItem.diameter && (
          <Text as="h5" lineHeight="short" fontSize="lg">
            Diameter: {listItem.diameter}
          </Text>
        )}
      </Box>
    </ScaleFade>
  );
}

export default ListingCard;
