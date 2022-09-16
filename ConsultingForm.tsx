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


    return <div className="test">
        <Grid container spacing = {0}>
                <Grid xs={6}>
                <Grid container justifyContent = "center">
                    <List>
                    <ListItem>
                        <TextField
                        required
                        label="Name"
                        defaultValue="Enter your name"

                    />
                    </ListItem>
                    <ListItem>
                    <TextField
                        required
                        label="Email"
                        defaultValue="Enter your email"

                    />
                    </ListItem>
                    <ListItem>
                    <TextField
                        required
                        label="Company Name"
                        defaultValue="Enter your company name"

                    />
                    </ListItem>
                    </List>

                </Grid>
            </Grid>
            
            <Grid xs={6}>
                <List disablePadding >
                    <ListItem>    
                        <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="end"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={`Line item 8`} />
            </ListItemButton>
            </ListItem>
            <ListItem>    
                        <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="end"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={`Line item 8`} />
            </ListItemButton>
            </ListItem>
            
            <ListItem>    
                        <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="end"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={`Line item 8`} />
            </ListItemButton>
            </ListItem>
            
            <ListItem>    
                        <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="end"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={`Line item 8`} />
            </ListItemButton>
            </ListItem>
            
            
            
                        {/* <FormControlLabel control={<Checkbox style={{
                            color: "#FFFFFF"
                        }} />} label="Sponsor Events?" />
                        </ListItem> */}

                    {/* <ListItem>
                        <FormControlLabel control={<Checkbox style={{
                            color: "#FFFFFF"
                        }} />} label="Need interns/IT support?" />
                    </ListItem>

                    <ListItem>
                        <FormControlLabel control={<Checkbox style={{
                            color: "#FFFFFF"
                        }} />} label="Need a project completed?" />
                    </ListItem>
                    
                    <ListItem>
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
                        </ListItem> */}
                    </List>

            </Grid>
            <Grid xs = {12}>
                <Button variant="contained" >Medium</Button>
            </Grid>
        </Grid>
        
    </div >
}

export default ConsultingForm;
