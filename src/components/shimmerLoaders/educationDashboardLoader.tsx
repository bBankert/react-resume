import { Grid, Skeleton } from "@mui/material";
import React from "react";

const EducationDashboardLoader = () => (
    <>
        <Grid 
                item 
                xs={12}
                >
                <Skeleton variant="rounded" width={'100%'} height={120} />
        </Grid>
    </>
);

export default EducationDashboardLoader;