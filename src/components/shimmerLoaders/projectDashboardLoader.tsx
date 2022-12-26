import { Grid, Skeleton } from "@mui/material";
import React from "react";

const ProjectDashboardLoader = () => (
    <>
        {[1,2,3].map((value,index) => (
            <Grid 
                item 
                xs={12}
                //Trying to generate a random key when this will be re-used...
                key={`ProjectLoader-${(Math.floor(Math.random() * 101))}-${value}-${index}`}>
                <Skeleton variant="rounded" width={'100%'} height={120} />
        </Grid>
        ))}
        
        
    </>
);

export default ProjectDashboardLoader;