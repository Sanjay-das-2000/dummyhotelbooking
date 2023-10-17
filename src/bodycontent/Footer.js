import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";

export default function Footer() {
  const backtoTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
  return (
    <div>
      <Box overflow={"hidden"} backgroundColor="#154360" color="white">
        <Box m="5% 8%" position="relative">
          <Heading m="2% auto" fontSize={["1.2rem", "1.5rem", "1.6rem", "1.8rem"]}>HotelBooking</Heading>
          <Flex m="2% auto">
            <Box mr="15%" fontSize={["10px", "11px", "13px", "16px"]}>
              <Text fontWeight="bold" mb="5%" >
                Work with us
              </Text>
              <Text lineHeight={["15px","15px","30px","35px"]} >
                <a href="@">Business Events</a>
              </Text>
              <Text lineHeight={"35px"}>
                <a href="@">Media</a>
              </Text>
              <Text>
                <a href="@">Travel Trade</a>
              </Text>
            </Box>
            <Box fontSize={["10px", "11px", "13px", "16px"]}>
              <Text fontWeight="bold" mb="5%">
                Connect
              </Text>
              <HStack spacing={5} size={[10,13,18,20]}>
                <FaFacebookF  />
                <FaYoutube />
                <FaInstagram  />
                <FaTwitter  />
                <FaPinterest />
                <FaTiktok  />
              </HStack>
            </Box>
          </Flex>
          <Flex >
            <HStack spacing={[5,5,10,10]} fontSize={["10px", "11px", "13px", "16px"]}>
              <Text>
                <a href="@">Terms of use</a>
              </Text>
              <Text>
                <a href="@">Privacy statement</a>
              </Text>
              <Text>
                <a href="@">Accessibility</a>
              </Text>
              <Text>
                <a href="@">Cookies</a>
              </Text>
              <Text>
                <a href="@">Feedback</a>
              </Text>
            </HStack>
              {/* <HStack fontSize={["11px", "11px", "12px", "14px"]} ml={"18%"} color="whiteAlpha.800" onClick={backtoTop} cursor="pointer">
                <Text>Back to top </Text>
                <Text>
                  <BsArrowUp size={25} />
                </Text>
              </HStack> */}
          </Flex>
        </Box>
      </Box>
    </div>
  );
}
