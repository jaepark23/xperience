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




import { Navigation, Pagination, Autoplay } from "swiper";

const Project = lazy(() => import("../generic/Project"))

function Users(props: {}) {

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
            <SwiperSlide> <Project name = "Data Managers Inc" img = {require("../../img/image1.png")} creator = "test" points = {["Android based app using Java?", "Helps sales people at the register identify items", "Users are able to use theier voice or text to look up inventory data"]}/> </SwiperSlide>
            <SwiperSlide> <Project name = "DMV Hours Tracker" img = {require("../../img/image7.png")} creator = "test" points = {["iOS based app coded in React-Native using Expo", "Utilizes Google Firebase backend to authenticate users, reset passwords, and store user data"]}/> </SwiperSlide>
        </Swiper>
    )
}

export default Users;
