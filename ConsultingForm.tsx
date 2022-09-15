import React, { useEffect, useState } from "react";
import "../../scss/core.scss"
import "../../scss/generic.scss"
import { motion } from "framer-motion";
import { Anim } from "../../Animation";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ConsultingForm() {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const [checked, setChecked] = useState(false)


    return <div className="test">
        <Grid container spacing={2}>
            <Grid xs={6}
                display="flex"
                direction="column"
                alignItems="center"
                justifyContent="center">
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue="Enter your name"
                    margin="normal"
                />
                <TextField
                    required
                    label="Email"
                    defaultValue="Enter your email"
                    margin="normal"
                />
                <TextField
                    required
                    label="Company Name"
                    defaultValue="Enter your company name"
                />
            </Grid>
            <Grid xs={6}>
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
            </Grid>
        </Grid>
        <Button variant="contained" size="medium">Medium</Button>
    </div >
}

export default ConsultingForm;

