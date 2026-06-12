import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    return (
        <Box id={'portfolio'} padding={5} ref={innerRef}>
            <Grid container display={'block-inline'} justifyContent={'center'} alignItems={"space-between"} padding={10}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} padding={5} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};