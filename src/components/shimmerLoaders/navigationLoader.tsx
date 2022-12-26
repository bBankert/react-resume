import { Skeleton } from "@mui/material";
import React from "react";

const NavigationLoader = () => (
  <>
    <Skeleton variant="text" data-testid='navigation-loader' sx={{ fontSize: "0.875rem", padding: '0 1rem' }} />
    <Skeleton variant="text" sx={{ fontSize: "1rem", padding: '0 1rem' }} />
    <Skeleton variant="text" sx={{ fontSize: "1rem", padding: '0 1rem' }} />
    <Skeleton variant="text" sx={{ fontSize: "1rem", padding: '0 1rem' }} />
  </>
);

export default NavigationLoader;
