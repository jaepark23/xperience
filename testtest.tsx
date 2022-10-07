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
import { Responsive, WidthProvider } from "react-grid-layout";

import { Divider, Stack } from "@mui/material";

const ResponsiveGridLayout = WidthProvider(Responsive);

function Team(props: {}) {

    const theme = useTheme()
    const navigate = useNavigate()

    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
        { i: "c", x: 2, y: 0, w: 1, h: 1, static: true },
        { i: "d", x: 0, y: 1, w: 1, h: 1, static: true },
        { i: "e", x: 1, y: 1, w: 1, h: 1, static: true },
        { i: "f", x: 2, y: 1, w: 1, h: 1, static: true },
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
                    {/* <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
        >
               <div className='profile'>
                                <a href="https://en.wikipedia.org/wiki/Bill_Gates">
                                    <img src={require("../../img/image1.png")} />
                                </a>
                                <figcaption className="name oxanium bold"> Bill Gates </figcaption>
                                <figcaption className="caption oxanium"> Co-founder of Microsot, super rich. I need two lines right now. </figcaption>
                            </div>


                            <div className='profile'>
                                <img src={require("../../img/image1.png")} />
                                <figcaption className="name oxanium bold"> Mr. Lueken </figcaption>
                                <figcaption className="caption oxanium"> Award winning Mr. Lueken. Fluent at everything. </figcaption>
                            </div>


                            <div className='profile'>
                                <img src={require("../../img/image1.png")} />
                                <figcaption className="name oxanium bold"> Tim Cook </figcaption>
                                <figcaption className="caption oxanium"> Co-founder at Apple, good at making phone related stuff</figcaption>
                            </div>


                            <div className='profile'>
                                <img src={require("../../img/image1.png")} />
                                <figcaption className="name oxanium bold"> Mark Zuckerberg </figcaption>
                                <figcaption className="caption oxanium"> CEO of Facebook or META, lizard man lizard man </figcaption>
                            </div>


                            <div className='profile'>
                                <img src={require("../../img/image1.png")} />
                                <figcaption className="name oxanium bold"> Elon Musk </figcaption>
                                <figcaption className="caption oxanium"> CEO of Tesla and SpaceX. Fluent in everything. </figcaption>
                            </div>

        </Stack> */}
                    <div className="row">
            <div className="column">
                <div className="card">
                <img src={require("../../img/image1.png")} alt="Jane"/>
                <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">CEO &amp; Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={require("../../img/image1.png")} alt="Mike" />
                <div className="container">
                    <h2>Mike Ross</h2>
                    <p className="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={require("../../img/image1.png")} alt="John" />
                <div className="container">
                    <h2>John Doe</h2>
                    <p className="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>
            </div>


            <div className="row">
            <div className="column">
                <div className="card">
                <img src={require("../../img/image1.png")} alt="Jane"/>
                <div className="container">
                    <h3> Test </h3> 
                    <p className="title">CEO &amp; Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={require("../../img/image1.png")} alt="Mike" />
                <div className="container">
                    <h2>Mike Ross</h2>
                    <p className="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={require("../../img/image1.png")} alt="John" />
                <div className="container">
                    <h2>John Doe</h2>
                    <p className="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
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
