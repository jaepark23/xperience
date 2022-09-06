import React, { useEffect, useRef, useState, lazy } from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";
import GridLayout from "react-grid-layout";

import "../../img/image1.png"
import "../../img/elon.webp"
import "../../img/lueken.jpg"
import Background from "../../img/team.jpg"

function Team(props: {}) {

    const theme = useTheme()
    const navigate = useNavigate()

    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1 },
        { i: "b", x: 1, y: 0, w: 1, h: 1 },
        { i: "c", x: 2, y: 0, w: 1, h: 1 },
        { i: "d", x: 0, y: 1, w: 1, h: 1 },
        { i: "e", x: 1, y: 1, w: 1, h: 1 },
        { i: "f", x: 2, y: 1, w: 1, h: 1 },
    ];
    useEffect(() => {
        theme.setLoadState(-2)
    }, [])

    return <div className="apex-users w-100 h-100 col-cc">
        <AnimatePresence>
            {theme.loadState === -2 &&
                <motion.div className="document col-st" variants={Anim.bounceY(1200).spring(240, 0, 30).build()}
                    initial="inactive" animate="active" exit="inactive"
                >
                    <div className="h0 oxanium bold col-cc" style={{
                        backgroundImage: `url(${Background})`,
                        backgroundSize: "100% auto",
                        backgroundPosition: "50% 50%",
                    }}>
                        Meet Our Team
                        {/* <motion.div className="back" tabIndex={0} onClick={() => {
                        theme.setLoadState(-1);
                        setTimeout(() => {
                            navigate("/");
                        }, 500)
                    }} whileHover={{boxShadow: "0 0 1rem white"}}>
                        {"<"}
                    </motion.div> */}
                    </div>
                    <GridLayout
                        className="layout"
                        layout={layout}
                        cols={3}
                        rowHeight={360}
                        width={1335}
                        containerPadding = {[20, -10]}
                        margin = {[20, 20]}
                    >
                        <div key="a">
                            <img src = {require("../../img/bill.jpg")} />
                            <figcaption className = "name oxanium bold"> Bill Gates </figcaption>
                            <figcaption className = "caption oxanium"> Co-founder of Microsot, super rich. I need two lines right now. </figcaption>
                        </div>
                        <div key="b">
                            <img src = {require("../../img/lueken.jpg")} />
                            <figcaption className = "name oxanium bold"> Mr. Lueken </figcaption>
                            <figcaption className = "caption oxanium"> Award winning Mr. Lueken. Fluent at everything. </figcaption>
                        </div>
                        <div key="c">
                            <img src = {require("../../img/tim.jpg")} />
                            <figcaption className = "name oxanium bold"> Tim Cook </figcaption>
                            <figcaption className = "caption oxanium"> Co-founder at Apple, good at making phone related stuff</figcaption>
                        </div>
                        <div key="d">
                            <img src = {require("../../img/mark.jpg")} />
                            <figcaption className = "name oxanium bold"> Mark Zuckerberg </figcaption>
                            <figcaption className = "caption oxanium"> CEO of Facebook or META, lizard man lizard man </figcaption>
                        </div>
                        <div key="e">
                            <img src = {require("../../img/elon.jpg")} />
                            <figcaption className = "name oxanium bold"> Elon Musk </figcaption>
                            <figcaption className = "caption oxanium"> CEO of Tesla and SpaceX. Fluent in everything. </figcaption>
                        </div>
                    </GridLayout>
                    
                    {/* <div className="list row-bc">
                    <div className= "img-with-text">
                        <img src = {require("../../img/bill.jpg")} />
                        <figcaption className = "name oxanium bold"> Bill Gates </figcaption>
                        <figcaption className = "oxanium"> Co-founder of Microsot, super rich. I need two lines right now.</figcaption>
                    </div>
                    
                    <div className= "img-with-text">
                    <img src = {require("../../img/lueken.jpg")} />
                        <figcaption className = "name oxanium bold"> Mr. Lueken </figcaption>
                        <figcaption className = "oxanium"> Award winning Mr. Lueken. Fluent at everything. </figcaption>
                    </div>
                    
                    <div className= "img-with-text">
                    <img src = {require("../../img/elon.jpg")} />
                        <figcaption className = "name oxanium bold"> Elon Musk </figcaption>
                        <figcaption className = "oxanium"> CEO of Tesla and SpaceX. Fluent in everything. </figcaption>
                    </div>
                </div>
                
                <div className="list row-bc">
                    <div className= "img-with-text">
                        <img src = {require("../../img/mark.jpg")} />
                        <figcaption className = "name oxanium bold"> Mark Zuckerberg </figcaption>
                        <figcaption className = "oxanium"> CEO of Facebook or META, lizard man lizard man </figcaption>
                    </div>
                    
                    <div className= "img-with-text">
                    <img src = {require("../../img/tim.jpg")} />
                        <figcaption className = "name oxanium bold"> Tim Cook </figcaption>
                        <figcaption className = "oxanium"> Co-founder at Apple, good at making phone related stuff</figcaption>
                    </div>
                    
                    <div className= "img-with-text">
                    <img src = {require("../../img/jeffwho.jpg")} />
                        <figcaption className = "name oxanium bold"> Jeff Bezos </figcaption>
                        <figcaption className = "oxanium"> CEO of Amazon @ amazon.com likes money</figcaption>
                    </div>
                </div> */}
                    <motion.div tabIndex={0} onClick={() => window.open("mailto:drshika.asher@vhhscougars.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{ boxShadow: "0 0 1rem white" }}>
                        Click to contact Drshika Asher (drshika.asher@vhhscougars.org) for more information.
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    </div>
}

export default Team;
