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
import { styled } from "@mui/material/styles";

const TextEntryField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInputBase-input': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});


function CodingForm() {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const [checked, setChecked] = useState(false)


    return <motion.div className="l"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: .5 }}>
        <div className="test">
            <TextEntryField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Name"
                variant="outlined"
                InputLabelProps={{
                    style: { color: '#fff', borderColor: 'white' },
                }}
            />
            <br />
            <TextEntryField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Email"
                variant="outlined"
                InputLabelProps={{
                    style: { color: '#fff', borderColor: 'white' },
                }}
            />
            <br />
            <TextEntryField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Grade Level"
                variant="outlined"
                InputLabelProps={{
                    style: { color: '#fff', borderColor: 'white' },
                }}
            />
        </div>
        <div className="test2">
            <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF"
            }} />} label="Intro to coding" />
            <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF"
            }} />} label="Robotics" />
            <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF"
            }} />} label="Web development" />
            <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF"
            }} checked={checked} onChange={handleChange} />} label="" />
            <TextEntryField
                type="text"
                variant="outlined"
                // disabled={!checked}
                label="Other: "
                InputLabelProps={{
                    style: { color: '#fff', borderColor: 'white' },
                }} />
        </div>
        <Box textAlign='center'>
            <Button variant='contained'>
                Submit
            </Button>
        </Box>
    </motion.div >
}

export default CodingForm;
