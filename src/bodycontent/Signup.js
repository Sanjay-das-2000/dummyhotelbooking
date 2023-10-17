import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  Menu, MenuButton, MenuItem, MenuList
} from "@chakra-ui/react";
import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <Box h="100vh" bgGradient="linear(to-b, #BDD6E8 , white)">
        <HStack
          m="0 !important"
          align="center"
          p="2% 3%"
          justify="space-between"
          color="black"
        >
          <Heading fontSize={["1.2rem", "1.2rem", "1.6rem", "2rem"]}>
            HotelBooking
          </Heading>
          <HStack spacing={10}>
            <HStack display={["none", "none", "flex", "flex"]} spacing={5}>
              <Text fontSize="1.4rem">
                <NavLink to="/">Home</NavLink>
              </Text>
              <Text fontSize="1.4rem">
                <NavLink to="/login">Log in</NavLink>
              </Text>
              <Text fontSize="1.4rem">
                <NavLink to="/signup">Sign up</NavLink>
              </Text>
            </HStack>
            <Box display={["flex", "flex", "none", "none"]}>
              <Menu isLazy>
                <MenuButton><CgMenuLeft size={30} /></MenuButton>
                <MenuList color="black" backgroundColor="gray.200">
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem backgroundColor="gray.200"><NavLink to="/">Home</NavLink></MenuItem>
                  <MenuItem backgroundColor="gray.200"><NavLink to="/login">Log in</NavLink></MenuItem>
                  <MenuItem backgroundColor="gray.200"><NavLink to="/signup">Sign up</NavLink></MenuItem>
                </MenuList>
              </Menu>
              
            </Box>
          </HStack>
        </HStack>
        <Box
          boxShadow="1px 1px 3px 4px lightblue"
          w={["70vw", "60vw", "40vw", "30vw"]}
          h={["48vh", "40vh", "45vh", "64vh"]}
          p="2% 4%"
          backgroundColor="white"
          borderRadius="10px"
          m="5% auto"
        >
          <Heading fontSize={["1.2rem", "1.5rem", "1.6rem", "1.8rem"]} mt="2%" mb="14%" textAlign="center">
            Create Account
          </Heading>
          <Stack spacing={6}>
            <Input variant="filled" placeholder="Name" />
            <Input variant="filled" placeholder="Email id" />
            <Input variant="filled" placeholder="Password" />
            <Input variant="filled" placeholder="Current Password" />

            <Button colorScheme="blue">Sign Up</Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
