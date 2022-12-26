import { Divider, Grid, List, ListItem, Paper, styled, Typography,Link } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import { ITechnology } from "../shared/models/technology";
import ProfessionalExperienceLoader from "../components/shimmerLoaders/professionalExperienceLoader";
import { useGetProfessionalInformationQuery } from "../shared/services/informationApi";

const ProfessionalDescriptionCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


const ProfessionalExprienceDetail = () => {
  const { professionalExperienceId } = useParams();

  const {
    isLoading,
    isError,
    data
  } = useGetProfessionalInformationQuery(null);

  const {
    profession,
  } = useGetProfessionalInformationQuery(null,{
    selectFromResult: ({ data }) => ({
      profession: data?.find((profession) => profession.id === parseInt(professionalExperienceId))
    })
  });
 

  return (
    <>
      {isLoading && !isError ?
        <ProfessionalExperienceLoader />
      :null}
      {!isLoading && isError ?
        <p>Error...</p>
      :null}
      {!isLoading && !isError ?
      <>
      {
        <>
          <ProfessionalDescriptionCard>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'>
                <Grid item>
                  <Typography component='h1' sx={{ fontSize: '2.5rem' }}>{profession.company}</Typography>
                </Grid>
                <Grid item>
                  <Typography component='h2' sx={{ fontSize: '2rem' }}>{profession.title}</Typography>
                </Grid>
            </Grid>
            <Divider />
            <List>
              {profession.details.map((detail: string,index) => (
                <ListItem key={`job-detail-${index}`}>
                  {detail}
                </ListItem>
              ))}
            </List>
          </ProfessionalDescriptionCard>
          <ProfessionalDescriptionCard sx={{ mt: '2rem' }}>
          <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'>
                <Grid item>
                  <Typography component='h2' sx={{ fontSize: '2rem' }}>What technology did I use here?</Typography>
                </Grid>
            </Grid>
            <Divider />
            <List>
              {profession.technologies.map((technology: ITechnology,index) => (
                <ListItem key={`${technology.name}-${index}`}>
                  <Link href={technology.link} rel='noopener' target='_blank'>{technology.name}</Link>
                </ListItem>
              ))}
            </List>
          </ProfessionalDescriptionCard>
          </>
      }
      </>
      :null}
    </>
  );
};

export default ProfessionalExprienceDetail;
