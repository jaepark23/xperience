import React, { useEffect, useRef, useState, lazy } from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";


import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import makeStyles from "@mui/material/styles/makeStyles";

const ConsultingForm = lazy(() => import("../generic/ConsultingForm"))

const styles = () => ({
    container: {
        height: '20rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

function Test(props: {}) {

    const theme = useTheme()
    const navigate = useNavigate()

    const [alignment, setAlignment] = useState('consulting')

    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
    ];

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
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
                        backgroundImage: "url(\"https://campussuite-storage.s3.amazonaws.com/prod/1059662/301794b6-30da-11e7-9e05-124f7febbf4a/1811609/d77e7936-9ff2-11e8-8fd6-120544974b42/optimizations/1\")",
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
                    {alignment === "consulting" ? <ConsultingForm /> : null}


                    <motion.div tabIndex={0} onClick={() => window.open("mailto:adam.lueken@d128.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{ boxShadow: "0 0 1rem white" }}>
                        Click to contact Adam Lueken (adam.lueken@d128.org) for more information.
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    </div>
}

export default Test;
