import { Alert, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Stack } from "@mui/system";
import './error.scss';

const Error = () => (
    <Stack 
    spacing={2}
    justifyContent='center'
    alignItems='center'
    className='errorStack'
    sx={{
        height: '100%',
        maxWidth: '43.75rem',
    }}>
        <Alert variant="filled" severity="error" sx={{ 
            textAlign: 'center',
            width: '100%',
            '& svg': { margin: 'auto 0' } }}
            >
            <Typography component="h1" sx={{ fontSize: '3rem' }}>Oh no!</Typography>
            <Typography component="h2" sx={{ fontSize: '2rem' }}>Something went wrong...</Typography>
        </Alert>
        <Button component={RouterLink} variant="contained" to='/' startIcon={<HomeIcon />} sx={{ width: '100%'}}>Return to the home page</Button>
    </Stack>
);

export default Error;