import { Grid, Skeleton } from "@mui/material";
import React from "react";

const FooterLoader = () => (
    <>
        <Grid item sx={{ minWidth: '15%' }}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Grid>
        <Grid item sx={{ minWidth: '15%' }}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Grid>
        <Grid item sx={{ minWidth: '15%' }}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Grid>
    </>
);

export default FooterLoader;