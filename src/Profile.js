import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './contexts/authContext';
import NavBar from './NavBar';
import PostModal from './PostModal';
import EditProfileModal from './EditProfileModal';

function createData(formValue, rowNum) {
  const res = [];
  if (rowNum === 1) {
    res.push({ item: 'Height:', value: formValue.height });
    res.push({ item: 'Weight:', value: formValue.weight });
    res.push({ item: 'School:', value: formValue.school });
  } else {
    res.push({ item: 'Age:', value: formValue.age });
    res.push({ item: 'Year:', value: formValue.gradYear });
    res.push({ item: 'Sex:', value: formValue.sex });
  }
  return res;
}

function DenseTable(props) {
  const { rows } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.item}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
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
  console.log(currentUser);
  const [value, setValue] = React.useState(0);
  const [formValue, setFormValue] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // get data using useEffect hook
  useEffect(() => {
    console.log('inside useEffect profile');
    console.log(currentUser.multiFactor.user.email);
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/user/${currentUser.multiFactor.user.email}`;
    axios.get(backend).then((data) => setFormValue(data.data[0]));
  }, []);

  return (
    <Grid container component='main'>
      <NavBar />
      {/* top section  */}
      <Grid item xs={12} sm={5} md={5} sx={{ backgroundColor: 'white' }}>

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
              <EditProfileModal formValue={formValue} setFormValue={setFormValue} />
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
              <DenseTable rows={createData(formValue, 1)} />
            </Grid>
            <Grid item>
              <DenseTable rows={createData(formValue, 2)} />
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

      <PostModal />

    </Grid>
  );
}
