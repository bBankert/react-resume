import { Card, CardContent, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import { useGetEducationInformationQuery } from "../shared/services/informationApi";

const HeaderCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  


const EducationDashboard = () => {

    const {
        data,
        isLoading,
        isError
    } = useGetEducationInformationQuery(null);

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
                            <Typography component='h1' sx={{ fontSize: '2.5rem',textAlign: 'center' }}>Education</Typography>
                        </HeaderCard>
                </Grid>
                {isLoading && !isError ?
                    <p>Loading please wait...</p>
                : null}
                {!isLoading && isError ?
                    <p>Something went wrong loading the education information</p>
                : null}
                {!isLoading && !isError ?
                    data.map((school) => (
                        <Grid 
                        item 
                        xs={12}
                        key={`${school.name}-${school.id}`}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                <Typography sx={{ fontSize: '2rem' }} component='h2' color="text.secondary" gutterBottom>
                                    {school.name}
                                </Typography>
                                <Typography sx={{ mt: '0.5rem' }}>
                                    {school.degree} - GPA: {school.gpa}
                                </Typography>
                                <Typography sx={{ margin: '0.5rem 0'}}>
                                    Relevant Courses:
                                </Typography>
                                <Grid container>
                                    {school.relevantCourses.map((course) => (
                                        <Grid item xs={12} md={4} key={`${course.title}-${course.id}`}>
                                            {course.title}
                                        </Grid>
                                    ))}
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                : null}


        </Grid>
    )
}


export default EducationDashboard;