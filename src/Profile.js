import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import React from 'react';
// import MainContent from './mainContent';
// import Logo from './logos/logo_orange.png';
// import Background from './logos/sports_background.png';
// import Phani from './logos/phani.png';
import Kee from './logos/kee.png';
// import Ishaan from './logos/ishaan.png';
// import Brandon from './logos/brandon.png';
import { useAuth } from './contexts/authContext';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function About() {
  const { currentUser } = useAuth();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container component='main'>
      {/* <MainContent /> */}
      {/* top section  */}
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={8} sx={{ mx: 1, backgroundColor: 'white' }}>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            // backgroundColor: 'red',
            borderRadius: 1,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 250,
              width: 250,
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
              borderRadius: '50%',
              mt: 2,
            }}
            src={Kee}
          />
          <Typography
            variant="h4"
            align='left'
            fontWeight='bold'
            sx={{ mt: 2 }}
          >
            {currentUser.multiFactor.user.displayName}
          </Typography>

          <Typography
            variant='body-1'
            align='left'
            // fontWeight='bold'
            sx={{ mt: 2, width: '75%' }}
          >
            Incoming SDE Intern @ Expedia Group |
            Computer Science Student at California Polytechnic State University-San Luis Obispo
          </Typography>
        </Box>

      </Grid>

      {/* bottom section */}
      <Grid item sm={6} md={6} component={Paper} elevation={8} sx={{ backgroundColor: 'white' }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            // display: 'flex',
            // flexDirection: 'row',
            // alignItems: 'center',
          }}
        >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Posts" />
            <Tab label="Media" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Put all user posts here
        </TabPanel>
        <TabPanel value={value} index={1}>
          Show all videos here
        </TabPanel>
      </Grid>

    </Grid>
  );
}
