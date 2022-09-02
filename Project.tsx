import React, { useEffect, useRef, useState } from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";

import "../../img/image1.png"

function Project(props: {name: string, img: string, creator: string, points: string[]}) {

    const theme = useTheme()
    const navigate = useNavigate()

    useEffect(() => {
        theme.setLoadState(-2)
    }, [])
    return (
        <div className="apex-coding w-100 h-100 col-cc">
            <AnimatePresence>
                {theme.loadState === -2 &&
                    <motion.div className="document col-st" variants={Anim.bounceY(1200).spring(240, 0, 30).build()}
                        initial="inactive" animate="active" exit="inactive"
                    >

                        <div className="h0 oxanium bold col-cc" style={{
        
                            backgroundSize: "100% auto",
                            backgroundPosition: "50% 50%",
                        }}>
                            {props.name}
                            <motion.div className="back" tabIndex={0} onClick={() => {
                                theme.setLoadState(-1);
                                setTimeout(() => {
                                    navigate("/");
                                }, 500)
                            }} whileHover={{ boxShadow: "0 0 1rem white" }}>
                                {"<"}
                            </motion.div>
                        </div>
                        <div className="list row-bc">
                            <ul className="oxanium h3">
                                {props.points.map((object, i) => <li> {object} </li>)}
                            </ul>
                                <img src = {props.img} />
                        </div>
                        <motion.div tabIndex={0} onClick={() => window.open("mailto:drshika.asher@vhhscougars.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{ boxShadow: "0 0 1rem white" }}>
                            Click to contact Drshika Asher (drshika.asher@vhhscougars.org) for more information.
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default Project
