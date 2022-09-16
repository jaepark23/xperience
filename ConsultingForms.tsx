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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function ConsultingForm() {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const [checked, setChecked] = useState(false)


    return <div className="l">
        <div className="test">
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="setgoal"
                variant="outlined"
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="goal description"
                variant="outlined"
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Diversity catagory"
                variant="outlined"
            />
        </div>
        <Button variant="contained" color="primary">
            save
        </Button>
    </div >
}

export default ConsultingForm;
