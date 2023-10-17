import { Box, Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import classes from "./Review.module.css";
import Slider from "./slider/Slider";
import { RiHotelFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaWheelchair } from "react-icons/fa";

export default function Review() {
  return (
    <div>
      <Box overflow="hidden" pt="4%" backgroundColor="#E7F2FA ">
        <Heading className={classes.header} fontSize={["1rem", "1.5rem", "1.6rem", "2.1rem"]}>Top Hotels</Heading>
        <Text ml="8%" fontSize={["11px", "11px", "12px", "14px"]}>
          Lorem ipsum odor amet, consectetuer adipiscing elit.
        </Text>
        <Slider />
      </Box>
      <Box backgroundColor="#E7F2FA ">
        <Box p="2% 10%" align="start" className={classes.service}>
          <Heading fontSize={["1rem", "1.5rem", "1.8rem", "2.2rem"]} mb="4%">
            Conveniences of our service
          </Heading>
          <Text
            w={["80vw", "70vw", "80vw", "50vw"]}
            fontSize={["11px", "11px", "13px", "16px"]}
            textAlign="justify"
          >
            Lorem Ipsum is simply dummy text of the printing st nter took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </Text>
        </Box>
      </Box>
      <Box backgroundColor="#E7F2FA ">
        <HStack
          p="5% 10%"
          justify="space-around"
          fontSize={["10px", "11px", "13px", "16px"]}
          textAlign="center"
        >
          <Center
            backgroundColor="whitesmoke"
            h={["20vw", "20vw", "15vw", "15vw"]}
            w={["20vw", "20vw", "15vw", "15vw"]}
            borderTopLeftRadius={{base:"50px",sm:"50px",md:"60px",lg:"90px"}}
            borderWidth="1px"
            borderColor="lightgray"
          >
            <VStack>
              <RiHotelFill className={classes.icon}/>
              <Text>Top rated Hotels</Text>
            </VStack>
          </Center>
          <Center
            backgroundColor="whitesmoke"
            h={["20vw", "20vw", "15vw", "15vw"]}
            w={["20vw", "20vw", "15vw", "15vw"]}
            borderWidth="1px"
            borderColor="lightgray"
          >
            <VStack>
              <BiSupport className={classes.icon}/>
              <Text>Round the clock support</Text>
            </VStack>
          </Center>
          <Center
            backgroundColor="whitesmoke"
            h={["20vw", "20vw", "15vw", "15vw"]}
            w={["20vw", "20vw", "15vw", "15vw"]}
            borderWidth="1px"
            borderColor="lightgray"
          >
            <VStack>
              <PiClockCountdownFill className={classes.icon}/>
              <Text>Request late checkouts</Text>
            </VStack>
          </Center>
          <Center
            backgroundColor="whitesmoke"
            h={["20vw", "20vw", "15vw", "15vw"]}
            w={["20vw", "20vw", "15vw", "15vw"]}
            borderBottomRightRadius={{base:"50px",sm:"50px",md:"60px",lg:"90px"}}
            borderWidth="1px"
            borderColor="lightgray"
          >
            <VStack>
              <FaWheelchair className={classes.icon}/>
              <Text>Best Fecilities</Text>
            </VStack>
          </Center>
        </HStack>
      </Box>
    </div>
  );
}
