import React from 'react';
import { useSwiper } from 'swiper/react';
import classes from "./Slider.module.css"
import {IoIosArrowBack ,IoIosArrowForward} from "react-icons/io"
import { Center } from '@chakra-ui/react';

export default function SliderNavButtons() {
    const swiper = useSwiper();

    return (
      <div >
        <button className={classes.swiperbtn} onClick={() => swiper.slidePrev()}><Center><IoIosArrowBack /></Center></button>
        <button className={classes.swiperbtn} onClick={() => swiper.slideNext()}><Center> <IoIosArrowForward /></Center></button>
      </div>
    );
}
