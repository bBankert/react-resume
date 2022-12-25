import { AppBar, Avatar, Box, CssBaseline, Grid, IconButton, Link, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import FooterLoader from "../../components/shimmerLoaders/footerLoader";
import { useGetCommonInformationQuery } from "../../shared/services/informationApi";
import "./footer.scss";

const Footer = () => {
  const { data,isLoading,isError } = useGetCommonInformationQuery(null);


  const formatPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) {
      return "";
    }
    const matches = phoneNumber.match(/(\d{3})(\d{3})(\d{4})/);
    let formattedNumber =
      "(" + matches[1] + ") " + matches[2] + "-" + matches[3];
    return formattedNumber;
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, ' > div': { minHeight: 0 } }} component='footer'>
        <Toolbar sx={{ width: '100%' }}>
          <Grid 
            container
            display='flex'
            justifyContent='space-between'>
            {isLoading && !isError ?
              <FooterLoader />
            : null}
            {!isLoading && isError ?
              <p>It looks like there was an error loading the footer...</p>
            : null}
            {!isLoading && !isError ?
              <>
                <Grid item xs={12} md={2} className='name-container'>
                  <Typography component='p'>Brandon Bankert</Typography>
                </Grid>
                <Grid item xs={12} md={2} className='email-container'>
                  <Link 
                  href={`mailto:${data.email}?subject=Resume Site Contact`} 
                  color="inherit" 
                  aria-label='Send me an email'
                  className='email'>Email me</Link>
                </Grid>
                <Grid item xs={12} md={2} className='phone-container'>
                  <Link 
                  href={`tel:${data.phone}`} 
                  aria-label='Call me' 
                  color="inherit" 
                  className='phone'>{formatPhoneNumber(data.phone)}</Link>
                </Grid>
              </>
            : null}
            
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
