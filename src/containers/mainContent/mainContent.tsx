import React from "react";
import {  Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Grid from "@mui/material/Grid";
import './mainContent.scss'

const MainContent = () => {
  return (
    <>
      <Header />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        component={'main'}
        sx={{
          flexGrow: 1,
          //the headers are not in the "flow" of the page, so we can offset here
          //to ensure no underflow happens
          marginTop: '5rem',
          marginBottom: '8rem'
        }}
      >
        <Grid item xs={11} sm={6}>
          <Outlet />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default MainContent;
