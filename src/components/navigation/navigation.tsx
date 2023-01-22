import React, { useState } from "react";
import "./navigation.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from '@mui/icons-material/Home';
import ListItem from "@mui/material/ListItem";
import AppBar from "../../containers/appBar/appBar";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import {
  useGetCommonInformationQuery,
} from "../../shared/services/informationApi";
import { Grid, ListSubheader,Link } from "@mui/material";
import NavigationLoader from "../shimmerLoaders/navigationLoader";
import { Link as RouterLink } from 'react-router-dom';
import { INavLink } from "../../shared/models/navLink";

const maxDrawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError } = useGetCommonInformationQuery(null);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const container = !!window ? window.document.body : undefined;


  return (
    <Box 
      sx={{ display: "flex" }}
    >
      <CssBaseline />
      <AppBar
        open={open}
        handleToggleDrawer={handleToggleDrawer}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${maxDrawerWidth}px)` },
          ml: { sm: `${maxDrawerWidth}px` },
        }}
      />
      <Drawer
        sx={{
          width: maxDrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: maxDrawerWidth,
            boxSizing: "border-box",
          },
        }}
        container={container}
        onClose={handleToggleDrawer}
        variant="temporary"
        anchor="left"
        open={open}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <DrawerHeader sx={{ justifyContent: 'space-between' }}>
          <IconButton  
            component={RouterLink} to='/'
            onClick={handleToggleDrawer}>
            <HomeIcon />
          </IconButton>
          <IconButton onClick={handleToggleDrawer}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          {isLoading && !isError ?
            <NavigationLoader />
            : null}
          {!isLoading && isError ?
            <p>It looks like we had an error loading the navigation...</p>
            : null}
          {!isLoading && !isError ?
            <>
            <li>
              <ul>
                <ListSubheader>Professional Experience</ListSubheader>
                {data.navLinks.professionalExperience.map((experience: INavLink) => (
                  <ListItem
                    key={`${experience.title}-${experience.id}`}
                    sx={{
                      paddingLeft: "1.5rem",
                    }}
                  >
                    <Link 
                      component={RouterLink}
                      color='inherit'
                      to={`/experience/${experience.id}`}
                      onClick={handleToggleDrawer}>
                        {experience.title}
                      </Link>
                  </ListItem>
                ))}
              </ul>
            </li>
            <li>
              <ul>
                <ListSubheader>Dashboards</ListSubheader>
                {
                  data.navLinks.dashboardLinks.map((dashboardLink) => (
                    <ListItem
                    key={`${dashboardLink.title}-${dashboardLink.id}`}
                    sx={{
                      paddingLeft: "1.5rem",
                    }}
                  >
                    <Link 
                    color='inherit' 
                    component={RouterLink} 
                    to={dashboardLink.dashboardRoute} 
                    onClick={handleToggleDrawer}>
                      {dashboardLink.title}
                    </Link>
                  </ListItem>
                  ))
                }
              </ul>
            </li>
            <ListItem sx={{ mt: '1rem' }}>
              <Grid container direction='row' justifyContent='space-between'>
                <Grid item>
                  <Link color='inherit' aria-label='Visit my github' href='http://www.github.com/bBankert' target='_blank' rel='noopener' >
                    <GitHubIcon />
                  </Link>
                </Grid>
                <Grid item>
                  <Link color='inherit' aria-label='Email me' href='mailto:bankert.brandon@gmail.com' target='_blank' rel='noopener'>
                    <EmailIcon />
                  </Link>
                </Grid>
                <Grid item>
                  <Link color='inherit' aria-label='Download a copy of my resume' href={window.location.origin + '/react-resume/documents/Resume.pdf'} download>
                    <DownloadIcon />
                  </Link>
                </Grid>
              </Grid>
            </ListItem>
            </>
          : null}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navigation;
