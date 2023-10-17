import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css";
import image from "../media/room.jpg";
import { Box, HStack, Heading, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";

export default function Header() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    setIndex(window.pageYOffset);
    if (window.pageYOffset > index) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  return (
    <>
      <VStack
        alignItems="center"
        justifyContent="center"
        className={classes.mainheader}
      >
        <div className={classes.room}>
          <img src={image} alt="" />
        </div>
        <div className={classes.overlay}></div>
        <HStack
          m="0 !important"
          align="center"
          pl="5%"
          pr="5%"
          justify="space-between"
          className={
            window.pageYOffset === 0
              ? classes.header
              : !show
              ? `${classes.header} ${classes.headershow}`
              : `${classes.header} ${classes.headernotshow}`
          }
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
        <Box className={classes.content} mt="8%">
          <Heading
            fontSize={["1.7rem", "1.7rem", "3rem", "4rem"]}
            w={["80vw", "80vw", "70vw", "70vw"]}
            mb="1.5%"
          >
            Find best hotels around the globe
          </Heading>
          <Box w={["85vw", "70vw", "65vw", "54vw"]} m="auto">
            <Text fontSize={["11px", "11px", "14px", "16px"]}>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius; dignissim elem.Lorem ipsum odor amet,
              consectetuer adipiscing elit. Ac purus in massa egestas mollis
              varius; dignissim elementum.
            </Text>
          </Box>
          <HStack
            color="black"
            h={["7vh", "8vh", "9vh", "12vh"]}
            w={["85vw", "70vw", "65vw", "60vw"]}
            m="4% auto"
            backgroundColor="white"
            borderRadius="50px"
          >
            <HStack
              pr={["20px", "24px", "30px", "40px"]}
              pl={["20px", "24px", "30px", "40px"]}
              fontSize={["10px", "11px", "13px", "16px"]}
            >
              <Box className={classes.searchbar}>
                <strong>
                  <text>Location</text>
                </strong>
                <br></br>
                <text className={classes.searchtext}>Where are you going?</text>
              </Box>
              <Box className={classes.searchbar}>
                <strong>
                  <text>Check In</text>
                </strong>
                <br></br>
                <text className={classes.searchtext}>Add dates</text>
              </Box>
              <Box className={classes.searchbar}>
                <strong>
                  <text>Check out</text>
                </strong>
                <br></br>
                <text className={classes.searchtext}>Add dates</text>
              </Box>
              <Box pr="10px" textAlign="left" w="14vw">
                <strong>
                  <text>Gueats</text>
                </strong>
                <br></br>
                <text className={classes.searchtext}>Add guests</text>
              </Box>
              <Box>
                <BsSearch className={classes.icon} />
              </Box>
            </HStack>
          </HStack>
        </Box>
      </VStack>
      <Outlet />
    </>
  );
}
