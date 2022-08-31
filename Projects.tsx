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


import { Navigation } from "swiper";

const Project1 = lazy(() => import("../projects/Project1"))

function Projects(props: {}) {

    const theme = useTheme()
    const navigate = useNavigate()

    useEffect(() => {
        theme.setLoadState(-2)
    }, [])

    return (
        <Swiper pagination={true} navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide> <Project1/> </SwiperSlide>
            <SwiperSlide> <Project1/> </SwiperSlide>
        </Swiper>
    )
}

export default Projects;
