import React from "react";
import classes from "./Questions.module.css";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import image from "../media/raindeer.png";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Questions() {
  return (
    <div>
      <Box className={classes.header} mt="5%">
        <Heading fontSize={["14px", "16px", "18px", "20px"]}>A few common questions</Heading>
        <HStack m={"5% auto"} color={"green.600"} fontSize={["10px", "11px", "13px", "16px"]}>
          <Text>View the full FAQ </Text>
          <Text>
            <BsArrowRight size={25} />
          </Text>
        </HStack>
      </Box>
      <Flex m={"4% 8%"} justifyContent="space-between">

      <Box width="45vw" >
        <Accordion allowToggle variant="custom" >
          <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={["10px", "11px", "13px", "16px"]}>
                  How to find the best discounts in top hotels
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4} fontSize={["10px", "11px", "13px", "16px"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={["10px", "11px", "13px", "16px"]}>
                  How to find best hotels according to your choice?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4} fontSize={["10px", "11px", "13px", "16px"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={["10px", "11px", "13px", "16px"]}>
                  What are the best hotels in your area?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4} fontSize={["10px", "11px", "13px", "16px"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={["10px", "11px", "12px", "16px"]}>
                  Peoples review toward to hotel booking experiances
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4} fontSize={["10px", "11px", "12px", "16px"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        
      </Box>
      <Box w="25vw">
            <img src={image} alt=""></img>
            <Text fontSize={["10px", "11px", "13px", "16px"]} fontWeight="bold" w="22vw" mt="5%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor</Text>
      </Box>
      </Flex>

    </div>
  );
}
