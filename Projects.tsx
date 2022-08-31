import React, {useEffect, useRef, useState, lazy} from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import {AnimatePresence, motion} from "framer-motion";
import {Anim} from "../../Animation";
import {useTheme} from "../generic/ThemeContext";
import {useNavigate} from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss"

import { Navigation, Pagination, Autoplay } from "swiper";

const Project1 = lazy(() => import("../projects/Project1"))

function Projects(props: {}) {

    const theme = useTheme()
    const navigate = useNavigate()

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };

    useEffect(() => {
        theme.setLoadState(-2)
    }, [])

    return (
        <Swiper pagination={pagination} autoplay = {{delay: 8000, disableOnInteraction: false }} slidesPerView = {1} navigation={true} modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide> <Project1/> </SwiperSlide>
            <SwiperSlide> <Project1/> </SwiperSlide>
            <SwiperSlide> <Project1/> </SwiperSlide>
            <SwiperSlide> <Project1/> </SwiperSlide>
        </Swiper>
    )
}

export default Projects;
