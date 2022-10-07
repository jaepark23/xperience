import React, { useEffect, useRef, useState, lazy } from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";


import Background from "../../img/team.jpeg"
import { fontSize } from "@mui/system";

function Team(props: {}) {

    const theme = useTheme()
    const navigate = useNavigate()

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
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src={require("../../img/image1.png")} alt="Jane" />
                                <div className="container">
                                    <h2>Jane Doe</h2>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <img src={require("../../img/bill.webp")} alt="Mike" />
                                <div className="container">
                                    <h2>Bill Gates</h2>

                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>

                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <img src={require("../../img/image1.png")} alt="John" />
                                <div className="container">
                                    <h2>John Doe</h2>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>
                                    <a href="https://github.com/jaepark23/xperience" ><FaGithub /> </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <motion.div tabIndex={0} onClick={() => window.open("mailto:drshika.asher@vhhscougars.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{ boxShadow: "0 0 1rem white" }}>
                        Click to contact Drshika Asher (drshika.asher@vhhscougars.org) for more information.
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    </div>
}

export default Team;
