import React, { useEffect, useRef, useState } from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

import GridLayout from "react-grid-layout";


function Test(props: {}) {

    const [checked, setChecked] = useState(false)
    const theme = useTheme()
    const navigate = useNavigate()

    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
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
                    
                    <GridLayout
                        className="layout"
                        layout={layout}
                        cols={2}
                        rowHeight={360}
                        width={1335}
                        containerPadding={[20, -10]}
                        margin={[20, 20]}
                    >
                        <div key="a">
                            <ListItem alignItems="center">
                                <FormControlLabel control={<Checkbox style={{
                                    color: "#FFFFFF"
                                }} />} label="Sponsor Events?" />
                            </ListItem>

                            <ListItem alignItems="center">
                                <FormControlLabel control={<Checkbox style={{
                                    color: "#FFFFFF"
                                }} />} label="Need interns/IT support?" />
                            </ListItem>

                            <ListItem alignItems="center">
                                <FormControlLabel control={<Checkbox style={{
                                    color: "#FFFFFF"
                                }} />} label="Need a project completed?" />
                            </ListItem>

                            <ListItem alignItems="center">
                                <FormControlLabel control={<Checkbox style={{
                                    color: "#FFFFFF"
                                }} checked={checked} onChange={handleChange} />} label="" />
                                <TextField
                                    disabled={!checked}
                                    label="Other: "
                                    sx={{ input: { color: 'white' } }}
                                    InputLabelProps={{
                                        style: { color: '#fff' },
                                    }}
                                />
                            </ListItem>
                            </div>
                            
                            <div key="b">
                            <ListItem alignItems="center">
                                <FormControlLabel control={<Checkbox style={{
                                    color: "#FFFFFF"
                                }} />} label="Sponsor Events?" />
                            </ListItem>

                            <ListItem alignItems="center">
                                <FormControlLabel control={<Checkbox style={{
                                    color: "#FFFFFF"
                                }} />} label="Need interns/IT support?" />
                            </ListItem>

                            <ListItem alignItems="center">
                                <FormControlLabel control={<Checkbox style={{
                                    color: "#FFFFFF"
                                }} />} label="Need a project completed?" />
                            </ListItem>

                            <ListItem alignItems="center">
                                <FormControlLabel control={<Checkbox style={{
                                    color: "#FFFFFF"
                                }} checked={checked} onChange={handleChange} />} label="" />
                                <TextField
                                    disabled={!checked}
                                    label="Other: "
                                    sx={{ input: { color: 'white' } }}
                                    InputLabelProps={{
                                        style: { color: '#fff' },
                                    }}
                                />
                            </ListItem>
                            </div>
                    </GridLayout>



                    <motion.div tabIndex={0} onClick={() => window.open("mailto:adam.lueken@d128.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{ boxShadow: "0 0 1rem white" }}>
                        Click to contact Adam Lueken (adam.lueken@d128.org) for more information.
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    </div>
}

export default Test;

