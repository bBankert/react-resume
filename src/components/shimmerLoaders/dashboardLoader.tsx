import { Grid, Skeleton } from "@mui/material";
import React from "react";

const DashboardLoader = () => (
  <>
    <Grid item xs={12} display="flex" justifyContent="center">
      <Skeleton variant="rounded" width={250} height={250} />
    </Grid>
    <Grid
      item
      xs={12}
      sx={{
        textAlign: "center",
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: "2.5rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
    </Grid>
  </>
);

export default DashboardLoader;
