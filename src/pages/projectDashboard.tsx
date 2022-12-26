import { Card, CardActions, CardContent, Divider, Grid, Link, Paper, styled, Typography } from "@mui/material";
import React from "react";
import ProjectDashboardLoader from "../components/shimmerLoaders/projectDashboardLoader";
import { IProject } from "../shared/models/project";
import { useGetProjectInformationQuery } from "../shared/services/informationApi";

const HeaderCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


const ProjectDashboard = () => {
  const {
    data,
    isLoading,
    isError
  } = useGetProjectInformationQuery(null);
 

  return (
      <Grid 
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      rowGap={2}>
        <Grid 
          item 
          xs={12}>
            <HeaderCard>
              <Typography component='h1' sx={{ fontSize: '2.5rem', textAlign: 'center' }}>Projects</Typography>
            </HeaderCard>
        </Grid>
        <Grid 
          item 
          xs={12}>
            <HeaderCard>
              <Typography component='h2' sx={{ fontSize: '2rem' }}>Previous</Typography>
            </HeaderCard>
        </Grid>
        {isLoading && !isError ? 
          <ProjectDashboardLoader />
        : null}
        {!isLoading && isError ? 
        <p>Something went wrong loading the previous project information</p>
        : null}
        {!isLoading && !isError ? 
          data.previousProjects.map((previousProject: IProject) => (
            <Grid 
            item 
            xs={12}
            key={`${previousProject.name}-${previousProject.id}`}>
              <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {previousProject.name}
                </Typography>
                <Divider />
                <Typography variant="body2" sx={{ mt: '0.5rem' }}>
                  {previousProject.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ paddingLeft: '1rem' }}>
                {previousProject.sourceLink ? 
                  <Link 
                    target='_blank' 
                    rel='noopener' 
                    color='inherit' 
                    href={previousProject.sourceLink}>
                      Source Code
                      </Link> 
                : null }
                {previousProject.liveLink ? 
                  <Link 
                    target='_blank' 
                    rel='noopener' 
                    color='inherit' 
                    href={previousProject.liveLink}>
                      Live link
                  </Link> 
                : null }
              </CardActions>
            </Card>
            </Grid>
          ))
        : null}
        <Grid 
          item 
          xs={12}>
            <HeaderCard>
              <Typography component='h2' sx={{ fontSize: '2rem' }}>Upcoming</Typography>
            </HeaderCard>
        </Grid>
        {isLoading && !isError ? 
          <ProjectDashboardLoader />
        : null}
        {!isLoading && isError ? 
        <p>Something went wrong loading the upcoming project information</p>
        : null}
        {!isLoading && !isError ? 
          data.upcomingProjects.map((upcomingProject: IProject) => (
            <Grid 
            item 
            xs={12}
            key={`${upcomingProject.name}-${upcomingProject.id}`}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {upcomingProject.name}
                  </Typography>
                  <Divider />
                  <Typography variant="body2" sx={{ mt: '0.5rem' }}>
                    {upcomingProject.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        : null}
      </Grid>
  );
};

export default ProjectDashboard;