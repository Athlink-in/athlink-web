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
import React, { useState, useEffect } from 'react';
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

function EditProfile(props) {
  const [open, setOpen] = useState(false);
  const { formValue, setFormValue } = props;
  const [editedFormValue, setEditedFormValue] = useState(formValue);

  console.log('inside edit profile');
  console.log(editedFormValue);
  // const [formValue, setFormValue] = useState({
  //   firstname: '',
  //   lastname: '',
  //   email: 'keeratg@gmail.com',
  //   memberSince: null,
  //   height: 0,
  //   age: 0,
  //   school: '',
  //   weight: 0,
  //   gradYear: 2022,
  //   sex: '',
  // });

  useEffect(() => {
    setEditedFormValue(formValue);
  }, [formValue]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setEditedFormValue({
      ...editedFormValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/user`;
    // console.log(formValue);
    // console.log(backend);
    axios.post(backend, editedFormValue).then(
      () => setFormValue(editedFormValue),
    ).catch(
      (error) => console.log(error),
    );
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
            defaultValue={editedFormValue.firstname}
            sx={{ mb: 3 }}
          />

          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="lastname"
            label="Last name"
            defaultValue={editedFormValue.lastname}
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
            <OutlinedInput
              id="weight"
              defaultValue={editedFormValue.weight}
              onChange={handleChange}
              endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            />
            <FormHelperText id="outlined-weight-text">Weight</FormHelperText>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
            <OutlinedInput
              id="height"
              defaultValue={editedFormValue.height}
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
            defaultValue={editedFormValue.age}
            sx={{ mb: 3 }}
          />

          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="school"
            label="School"
            defaultValue={editedFormValue.school}
            sx={{ mb: 3 }}
          />

          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="gradYear"
            label="Year"
            defaultValue={editedFormValue.gradYear}
            sx={{ mb: 3 }}
          />

          <TextField
            required
            fullWidth
            onChange={handleChange}
            id="sex"
            label="Sex"
            defaultValue={editedFormValue.sex}
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
              <EditProfile formValue={formValue} setFormValue={setFormValue} />
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

    </Grid>
  );
}
