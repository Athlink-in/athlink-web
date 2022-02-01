// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import { useNavigate } from 'react-router-dom';
import React from 'react';
import MainContent from './mainContent';
import Logo from './logos/logo_orange.png';
import Background from './logos/sports_background.png';
import Phani from './logos/phani.png';
import Kee from './logos/kee.png';
import Ishaan from './logos/ishaan.png';
import Brandon from './logos/brandon.png';

export default function About() {
  return (
    /* add navbar here */
    <Grid container component='main'>
      <MainContent />
      {/* about us section  */}
      <Grid item xs={false} sm={12} md={12} sx={{ backgroundColor: 'white' }}>
        <Box sx={{ backgroundImage: `url(${Background})`, height: 170 }}>
          <Typography component="h1" variant="h4" align='center' sx={{ color: '#FFBD59', fontWeight: 1000, fontSize: 100, borderColor: 'black' }}>About Us</Typography>
        </Box>
        <Grid container>
          <Grid item sm={6} md={6}>
            <Box
              component="img"
              sx={{ height: 200, width: 200 }}
              src={Logo}
            />
          </Grid>
          <Grid item sm={6} md={6} sx={{ backgroundColor: 'white' }}>
            <Typography variant="h5" align='center'>What is Athlink?</Typography>
            <Typography variant="body1" align='left'>
              Athlink is a networking platform for athletes to increase their chances of playing
              for their dream college.
              We want to create an equal opportunity for all student athletes around the world to
              acheive their atheletic dreams.
              An Athlink profile allows athletes to connect with other athletes and recruiters in
              their area.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* team section */}
      <Grid item xs={false} sm={12} md={12} sx={{ backgroundColor: 'white' }}>

        <Typography component="h1" variant="h4" align='center' sx={{ my: 5 }}>Meet the Team</Typography>

        <Grid container>

          <Grid item sm={3} md={3} sx={{ backgroundColor: 'white', px: 1 }}>
            <Box
              component="img"
              sx={{
                height: 500,
                width: 400,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },

              }}
              alt="The house from the offer."
              src={Kee}
            />
            <Typography variant="body1" align='left'>
              Hi, my name is Keerat Grewal
            </Typography>
          </Grid>

          <Grid item sm={3} md={3} sx={{ backgroundColor: 'white', px: 1 }}>
            <Box
              component="img"
              sx={{
                height: 500,
                width: 400,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },

              }}
              alt="The house from the offer."
              src={Phani}
            />
            <Typography variant="body1" align='left'>
              Hi, my name is Phaniraj Aenugula
            </Typography>
          </Grid>

          <Grid item sm={3} md={3} sx={{ backgroundColor: 'white', px: 1 }}>
            <Box
              component="img"
              sx={{
                height: 500,
                width: 400,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },

              }}
              src={Ishaan}
            />
            <Typography variant="body1" align='left'>
              Hi, my name is Ishaan Karvir
            </Typography>
          </Grid>

          <Grid item sm={3} md={3} sx={{ backgroundColor: 'white', px: 1 }}>
            <Box
              component="img"
              sx={{
                height: 500,
                width: 400,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },

              }}
              src={Brandon}
            />
            <Typography variant="body1" align='left'>
              Hi, my name is Brandon Burana
            </Typography>
          </Grid>

        </Grid>

      </Grid>

    </Grid>
  );
}
