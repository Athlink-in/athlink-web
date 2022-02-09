import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useAuth } from './contexts/authContext';
import NavBar from './NavBar';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const firstRows = [
  createData('Height:', '72 in.'),
  createData('Weight:', '200 lbs'),
  createData('School:', 'Folsom High School'),
];

const secondRows = [
  createData('Age:', '17'),
  createData('Year:', '2022'),
  createData('Sex:', 'Male'),
];

function DenseTable(props) {
  const { rows } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

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

export default function About() {
  const { currentUser } = useAuth();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container component='main'>
      <NavBar />
      {/* top section  */}
      <Grid item xs={12} sm={6} md={6} sx={{ backgroundColor: 'white' }}>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 1,
            ml: 5,
          }}
        >

          <Box
            sx={{
              display: 'flex',
              backgroundColor: 'white',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
                borderRadius: '50%',
                mt: 2,
              }}
              src={currentUser.multiFactor.user.photoURL}
            />
            <Box sx={{ ml: 'auto', mt: 5, mr: 10 }}>
              <Button sx={{ height: 20, color: 'white', backgroundColor: '#4976BA' }}>
                Edit Profile
              </Button>
            </Box>
          </Box>

          <Typography
            variant="h4"
            align='left'
            fontWeight='bold'
            sx={{ mt: 2 }}
          >
            {currentUser.multiFactor.user.displayName}
          </Typography>

          <Typography
            variant='body-2'
            align='left'
            // fontWeight='bold'
            sx={{ mt: 0, color: '#4976BA' }}
          >
            100 connections
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

          <Typography
            variant='h4'
            align='left'
            fontWeight='bold'
            sx={{ mt: 5, mb: 5, color: '#4976BA' }}
          >
            About
          </Typography>

          <Grid container>
            <Grid item sx={{ mr: 5 }}>
              <DenseTable rows={firstRows} />
            </Grid>
            <Grid item>
              <DenseTable rows={secondRows} />
            </Grid>
          </Grid>

        </Box>

      </Grid>

      {/* bottom section */}
      <Grid item xs={12} sm={6} md={6} sx={{ backgroundColor: 'white' }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
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
