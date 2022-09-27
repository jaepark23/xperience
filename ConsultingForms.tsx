import React, { useEffect, useState } from "react";
import "../../scss/core.scss"
import "../../scss/generic.scss"
import { AnimatePresence, motion } from "framer-motion";
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
import { Divider, Stack } from "@mui/material";

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


function ConsultingForm() {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const [checked, setChecked] = useState(false)

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    return <motion.div className="l"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: .8 }}
    >

        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
        >

            <TextEntryField
                style={{ width: "200px"}}
                size = "small"
                type="text"
                label="Name"
                variant="outlined"
                InputLabelProps={{
                    style: { color: '#fff', borderColor: 'white' },
                }}
            />

            <TextEntryField
                style={{ width: "200px"}}
                size = "small"
                type="text"
                label="Email"
                variant="outlined"
                InputLabelProps={{
                    style: { color: '#fff', borderColor: 'white' },
                }}
            />

            <TextEntryField
                style={{ width: "200px" }}
                size = "small"
                type="text"
                label="Company Name"
                variant="outlined"
                InputLabelProps={{
                    style: { color: '#fff', borderColor: 'white' },
                }}
            />
        </Stack>
        
        <br />
        <Divider variant="middle" style={{ background: 'white', borderBottomWidth: 2, marginLeft: '4%', marginRight: '4%' }} />


        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}

        >
            <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF",
            }} />} label="Sponsor Events?" />
            <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF",
            }} />} label="Need interns/IT support?" />
            <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF",
            }} />} label="Need a project completed?" />
        </Stack>

        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}

        >
                        <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF",
            }} />} label="Need interns/IT support?" />
            <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF",
            }} />} label="Need a project completed?" />
            <FormControlLabel control={<Checkbox style={{
                color: "#FFFFFF"
            }} checked={checked} onChange={handleChange} />} label="" />
            <TextEntryField
                style={{ width: "200px", }}
                size = "small"
                type="text"
                variant="outlined"
                // disabled={!checked}
                label="Other: "
                InputLabelProps={{
                    style: { color: '#fff', borderColor: 'white' },
                }}
            />
        </Stack>
        <br />
        <Box textAlign='center'>
            <Button variant='contained'>
                Submit
            </Button>
        </Box>
    </motion.div >


}

export default ConsultingForm;
