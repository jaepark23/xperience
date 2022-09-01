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

import "../../img/managers.png"

import { Navigation, Pagination, Autoplay } from "swiper";

const Project = lazy(() => import("../generic/Project"))

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
            <SwiperSlide> <Project name = "Data Managers Inc" img = "../../img/managers.png" creator = "test" points = {["Android based app", "Assist sales people at the register identify items", "Use voice or text to look up their inventory"]}/> </SwiperSlide>
        </Swiper>
    )
}

export default Projects;
