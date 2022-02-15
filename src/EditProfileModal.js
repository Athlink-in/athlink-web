import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
// import Divider from '@mui/material/Divider';
import axios from 'axios';

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

export default function EditProfileModal(props) {
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
      <Button onClick={handleOpen} variant='contained' sx={{ backgroundColor: '#4976BA', fontWeight: 'bold' }}>
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

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                required
                fullWidth
                onChange={handleChange}
                id="school"
                label="School"
                defaultValue={editedFormValue.school}
                sx={{ mb: 3 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                onChange={handleChange}
                id="gradYear"
                label="Year"
                defaultValue={editedFormValue.gradYear}
                sx={{ mb: 3 }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                onChange={handleChange}
                id="age"
                label="Age"
                defaultValue={editedFormValue.age}
                sx={{ mb: 3 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                onChange={handleChange}
                id="sex"
                label="Sex"
                defaultValue={editedFormValue.sex}
                sx={{ mb: 3 }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl sx={{ mb: 3 }} variant="outlined">
                <OutlinedInput
                  id="height"
                  defaultValue={editedFormValue.height}
                  onChange={handleChange}
                  endAdornment={<InputAdornment position="end">inches</InputAdornment>}
                />
                <FormHelperText id="outlined-weight-text">Height</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ mb: 3 }} variant="outlined">
                <OutlinedInput
                  id="weight"
                  defaultValue={editedFormValue.weight}
                  onChange={handleChange}
                  endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
                />
                <FormHelperText id="outlined-weight-text">Weight</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <TextField
            required
            fullWidth
            multiline
            onChange={handleChange}
            id="description"
            label="Bio/Description"
            defaultValue={editedFormValue.description}
            sx={{ mb: 3 }}
            rows={5}
          />

          <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button type='submit' onClick={handleSubmit} variant='contained' sx={{ backgroundColor: '#4976BA', fontWeight: 'bold' }}>
              Save
            </Button>
            <Button type='submit' onClick={handleClose} variant='contained' sx={{ backgroundColor: '#4976BA', fontWeight: 'bold', mr: 'auto' }}>
              Close
            </Button>
          </Box>

        </Box>
      </Modal>
    </div>
  );
}
