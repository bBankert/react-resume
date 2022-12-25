import { Divider, Grid, Paper, styled, Typography, List, Link, ListItem } from "@mui/material";
import React from "react";
import { useGetDashboardInformationQuery } from "../shared/services/informationApi";
import "./dashboard.scss";
import DashboardLoader from "../components/shimmerLoaders/dashboardLoader";

const DescriptionCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const { data, isLoading, isError } = useGetDashboardInformationQuery(null);

  return (
    <Grid
      container
      columnSpacing={{
        xs: 1,
      }}
    >
      {isLoading && !isError ? <DashboardLoader /> : null}
      {!isLoading && isError ? (
        <p>Something went wrong loading the dashboard</p>
      ) : null}
      {!isLoading && !isError ? (
        <>
         <Grid
            item
            xs={12}
            display='flex'
            justifyContent='center'
            >
         <img id="self-portrait" src={data.introduction.image} alt="Brandon Bankert"/>
        </Grid>
        <Grid
            item
            xs={12}
            sx={{
                textAlign: 'center'
            }}>
            <Typography 
              component="h1" 
              className="name"
              sx={{
                fontSize: '2.5rem'
              }}>{data.introduction.name}</Typography>
            <Typography 
              component="h2" 
              className="title text-muted"
              sx={{
                fontSize: '2rem'
              }}>{data.introduction.title}</Typography>
        </Grid>
        <DescriptionCard
          sx={{
            width: '100%',
            mt: '1rem'
          }}
        >
          <Typography component='h3' sx={{ fontSize: '1.5rem' }}>A little about this site...</Typography>
          <Divider />
              Hello! Welcome to my resume website, this has been my own little personal project that I have built up over time.
              It started as just a chance for me to teach myself react, but it has evolved over time. Originally, this website was built
              with just JavaScript, React, and CSS. Then to make the site available it was deployed manually to gh-pages. Now, it is built width
              React, TypeScript, SCSS, and is deployed automatically on PR completion through GitHub Actions. The site is also taking advantage of Redux for state
              management along with RTK Query to simulate http requests for dynamic content. This site is also tested with Jest, which are run in the actions.
        </DescriptionCard>
        <DescriptionCard
          sx={{
            width: '100%',
            mt: '1rem'
          }}
        >
          <Typography component='h3' sx={{ fontSize: '1.5rem' }}>A little about me...</Typography>
          <Divider />
              I feel that this site is a pretty good example of me. It is a fun little project that I can work on over time and learn new things. I have always enjoyed going
              out and learning new things. React has been my favorite environment ever since I started learning it. It has kept my interest and continuously made me 
              want to learn new things ever since. Some other passions of mine included cyber security, which is an extremely interesting field, the biggest thing that draws me to 
              cyber security is how even though new security features come out seemingly daily, the exploiters seem to be able to find a new vulnerability. The amount of creativity
              that goes into finding those vulnerabilities is insprining.
        </DescriptionCard>
        <DescriptionCard
          sx={{
            width: '100%',
            mt: '1rem'
          }}
        >
          <Typography component='h3' sx={{ fontSize: '1.5rem' }}>What is my current stack?</Typography>
          <Divider />
              My stack has changed over time, but my current stack is:
              
              <List>
                <ListItem>
                  <Link target='_blank' rel='noopener' href='https://reactjs.org/' aria-label='Go to React site'>React</Link>
                </ListItem>
                <ListItem>
                  <Link target='_blank' rel='noopener' href='https://reactnative.dev/' aria-label='Go to React Native site'>React Native</Link>
                </ListItem>
                <ListItem>
                  <Link target='_blank' rel='noopener' href='https://www.mongodb.com/' aria-label='Go to Mongo DB site'>Mongo DB</Link>
                </ListItem>
                <ListItem>
                  <Link target='_blank' rel='noopener' href='https://nodejs.org/en/docs/' aria-label='Go to Node JS site'>Node / Express</Link>
                </ListItem>
                <ListItem>
                  <Link target='_blank' rel='noopener' href='https://aws.amazon.com/' aria-label='Go to Node JS site'>AWS</Link>
                </ListItem>
              </List>
        </DescriptionCard>
        <DescriptionCard
          sx={{
            width: '100%',
            mt: '1rem'
          }}
        >
          <Typography component='h3' sx={{ fontSize: '1.5rem' }}>What have I used before?</Typography>
          <Divider />
              I may not use them anymore, but I still have used them a fair bit in the past
              
              <List>
                <ListItem>
                  <Link target='_blank' rel='noopener' href='https://learn.microsoft.com/en-us/dotnet/core/introduction' aria-label='Go to Dot Net site'>.NET (Up to 6)</Link>
                </ListItem>
                <ListItem>
                  <Link target='_blank' rel='noopener' href='https://www.microsoft.com/en-us/sql-server/sql-server-downloads' aria-label='Go to SQL Server site'>SQL Server</Link>
                </ListItem>
              </List>
        </DescriptionCard>
        </>
      ) : null}
    </Grid>
  );
};

export default Dashboard;
