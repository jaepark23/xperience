import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";

import Background from "../../img/form.jpg"

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import CodingForm from "../generic/CodingForm"

import ConsultingForm from "../generic/ConsultingForm"
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";




function Test(props: {}) {

    const theme = useTheme()
    const navigate = useNavigate()

    const [alignment, setAlignment] = useState('consulting')

    const muiTheme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: "#FFFFFF",
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
          },
        },
      });

    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
    ];

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        if (newAlignment != null) {
            setAlignment(newAlignment)
        }

    };

    useEffect(() => {
        theme.setLoadState(-2)
    }, [])

    return <div className="apex-test w-100 h-100 col-cc">
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
                        Form
                        <motion.div className="back" tabIndex={0} onClick={() => {
                            theme.setLoadState(-1);
                            setTimeout(() => {
                                navigate("/");
                            }, 500)
                        }} whileHover={{ boxShadow: "0 0 1rem white" }}>
                            {"<"}
                        </motion.div>
                    </div>
                    <ThemeProvider theme = {muiTheme}>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="consulting">Consulting</ToggleButton>
                        <ToggleButton value="coding">Coding</ToggleButton>
                    </ToggleButtonGroup>
                    </ThemeProvider>
                    {alignment === "consulting" ? <ConsultingForm /> : <CodingForm />}

                    <motion.div tabIndex={0} onClick={() => window.open("mailto:adam.lueken@d128.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{ boxShadow: "0 0 1rem white" }}>
                        Click to contact Adam Lueken (adam.lueken@d128.org) for more information.
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    </div>
}

export default Test;
