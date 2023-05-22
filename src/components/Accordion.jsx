import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  LinkBox,
} from "@chakra-ui/react";
import React from "react";

function AccordionComponent({ name, data, color, notAvailable }) {
  return (
    <>
      {data?.length > 0 ? (
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton color={color}>
                <Box as="span" flex="1" textAlign="left">
                  <strong>{name}</strong>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {data.map((film, index) => (
                <LinkBox key={index} paddingX={"0.6em"}>
                  <Link
                    key={index}
                    href={film}
                    _hover={{ color: "blue.100" }}
                    cursor={"pointer"}
                    target="_blank"
                  >
                    {film}
                  </Link>
                </LinkBox>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <>
          <strong>Starships: </strong>
          {notAvailable}
        </>
      )}
    </>
  );
}

export default AccordionComponent;
