import React, { useRef } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./Slider.module.css";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import img1 from "../../media/download1.jfif";
import img7 from "../../media/download7.jfif";
import img2 from "../../media/download2.jfif";
import img3 from "../../media/download3.jfif";
import img4 from "../../media/download4.jfif";
import img5 from "../../media/download5.jfif";
import img6 from "../../media/download6.jfif";

export default function Slider() {
  const swiperRef = useRef();

  return (
    <div>
      <Box mb="5%">
        <Box mt="2%" mb="1%" position={"relative"} left="82%">
          <button
            className={classes.swiperbtn}
            onClick={() => swiperRef.current.slidePrev()}
          >
            <Center>
              <IoIosArrowBack size={30} />
            </Center>
          </button>
          <button
            className={classes.swiperbtn}
            onClick={() => swiperRef.current.slideNext()}
          >
            <Center>
              {" "}
              <IoIosArrowForward size={30} />
            </Center>
          </button>
        </Box>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={true}
          
        >
          <SwiperSlide className={classes.resslide} >
            <Box className={classes.image}>
              <img src={img7} alt=""></img>
            </Box>
            <Box padding="4% 6%" w="24vw" fontSize={["10px", "11px", "13px", "16px"]}>
              <Text>
                <strong>
                  Find yourself living the dreams 
                </strong>
              </Text>
              <Text >
                Discover the happiness-including lifestyle of the Nordics
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide className={classes.resslide}>
            <Box className={classes.image}>
              <img src={img1} alt=""></img>
            </Box>
            <Box padding="4% 6%" w="24vw" fontSize={["10px", "11px", "13px", "16px"]}>
              <Text  >
              <strong>
                  Find yourself living the dreams 
                </strong> 
              </Text>
              <Text >
                Discover the happiness-including lifestyle of the Nordics
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide className={classes.resslide}>
            <Box className={classes.image}>
              <img src={img2} alt=""></img>
            </Box>
            <Box padding="4% 6%" w="24vw" fontSize={["10px", "11px", "13px", "16px"]}>
              <Text>
              <strong>
                  Find yourself living the dreams 
                </strong>
              </Text>
              <Text >
                Discover the happiness-including lifestyle of the Nordics
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide className={classes.resslide}>
            <Box className={classes.image}>
              <img src={img3} alt=""></img>
            </Box>
            <Box padding="4% 6%" w="24vw" fontSize={["10px", "11px", "13px", "16px"]}>
              <Text >
              <strong>
                  Find yourself living the dreams 
                </strong>
              </Text>
              <Text >
                Discover the happiness-including lifestyle of the Nordics
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide className={classes.resslide}>
            <Box className={classes.image}>
              <img src={img4} alt=""></img>
            </Box>
            <Box padding="4% 6%" w="24vw" fontSize={["10px", "11px", "13px", "16px"]}>
              <Text >
              <strong>
                  Find yourself living the dreams 
                </strong>
              </Text>
              <Text >
                Discover the happiness-including lifestyle of the Nordics
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide className={classes.resslide}>
            <Box className={classes.image}>
              <img src={img5} alt=""></img>
            </Box>
            <Box padding="4% 6%" w="24vw" fontSize={["10px", "11px", "13px", "16px"]}>
              <Text >
              <strong>
                  Find yourself living the dreams 
                </strong>
              </Text>
              <Text >
                Discover the happiness-including lifestyle of the Nordics
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide className={classes.resslide}>
            <Box className={classes.image}>
              <img src={img6} alt=""></img>
            </Box>
            <Box padding="4% 6%" w="24vw" fontSize={["10px", "11px", "13px", "16px"]}>
              <Text >
              <strong>
                  Find yourself living the dreams 
                </strong>
              </Text>
              <Text >
                Discover the happiness-including lifestyle of the Nordics
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide className={classes.resslide}>
            <Box className={classes.image}>
              <img src={img7} alt=""></img>
            </Box>
            <Box padding="4% 6%" w="24vw" fontSize={["10px", "11px", "13px", "16px"]}>
              <Text>
              <strong>
                  Find yourself living the dreams 
                </strong>
              </Text>
              <Text >
                Discover the happiness-including lifestyle of the Nordics
              </Text>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
}
