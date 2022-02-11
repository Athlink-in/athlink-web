import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
// import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './contexts/authContext';
import NavBar from './NavBar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// grab data from mongoDB
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

function EditProfile() {
  const [open, setOpen] = useState(false);

  const [formValue, setFormValue] = useState({
    firstname: '',
    lastname: '',
    weight: 0,
    height: 0,
    age: 0,
    school: '',
    gradyear: 2022,
    sex: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
    console.log(formValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/user`;
    axios.post(backend, formValue).then((res) => console.log(res));
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ height: 20, color: 'white', backgroundColor: '#4976BA' }}>
        Edit Profile
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography
            variant="h4"
            align='left'
            fontWeight='bold'
            sx={{ mt: 3 }}
          >
            Edit Profile
          </Typography>
          <hr style={{ marginBottom: 20 }} />
          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="firstname"
            label="First name"
            defaultValue=''
            sx={{ mb: 3 }}
          />

          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="lastname"
            label="Last name"
            defaultValue=''
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
            <OutlinedInput
              id="weight"
              defaultValue={0}
              onChange={handleChange}
              endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            />
            <FormHelperText id="outlined-weight-text">Weight</FormHelperText>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
            <OutlinedInput
              id="height"
              defaultValue={0}
              onChange={handleChange}
              endAdornment={<InputAdornment position="end">inches</InputAdornment>}
            />
            <FormHelperText id="outlined-weight-text">Height</FormHelperText>
          </FormControl>

          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="age"
            label="Age"
            defaultValue=''
            sx={{ mb: 3 }}
          />

          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="school"
            label="School"
            defaultValue=''
            sx={{ mb: 3 }}
          />

          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="gradyear"
            label="Year"
            defaultValue=''
            sx={{ mb: 3 }}
          />

          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="sex"
            label="Sex"
            defaultValue=''
            sx={{ mb: 3 }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button type='submit' onClick={handleSubmit} sx={{ height: 50, color: 'white', backgroundColor: '#4976BA' }}>
              Save
            </Button>
          </Box>

        </Box>
      </Modal>
    </div>
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

  // get data using useEffect hook

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
              <EditProfile />
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
