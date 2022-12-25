import { Skeleton } from "@mui/material";
import React from "react";

const ProfessionalExperienceLoader = () => (
    <>
        <Skeleton variant="rounded" width={'100%'} height={120} sx={{ mb: '1rem' }} />
        <Skeleton variant="rounded" width={'100%'} height={120} />
    </>
);

export default ProfessionalExperienceLoader;