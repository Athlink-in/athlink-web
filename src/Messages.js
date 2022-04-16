import React from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import ImageIcon from '@mui/icons-material/Image';
import NavBar from './NavBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Messages() {
  return (
    <Grid container component='main'>
      <NavBar />
      <Grid container spacing={1} justifyContent='center' sx={{ mt: 1 }}>

        {/* {This is the names side} */}
        <Grid
          item
          xs={3}
          style={{ maxHeight: '90vh', overflow: 'auto' }}
          sx={{
            '&::-webkit-scrollbar': {
              width: 5,
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'white',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'lightgray',
              borderRadius: 10,
            },
          }}
        >
          <Item>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Typography
                variant="h6"
                align='left'
                fontWeight='bold'
                sx={{ mt: 1, ml: 1 }}
              >
                Messaging
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <AddCommentOutlinedIcon />
              </IconButton>
            </Box>
            <Divider />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#4976BA' }}>
                  B
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Brandon Burana" secondary="Hello!" />
            </ListItem>
            <Divider />
          </Item>
        </Grid>

        {/* This is the actual message box */}
        <Grid item xs={6} style={{ maxHeight: '90vh' }}>
          <Item>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography
                variant="h6"
                fontWeight='bold'
                sx={{ mt: 1, ml: 'auto' }}
              >
                Brandon Burana
              </Typography>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ ml: 'auto' }}>
                <MoreHorizOutlinedIcon />
              </IconButton>
            </Box>
            <Divider />

            {/* This is where the messages between people will be shown */}
            <Box
              component="main"
              sx={{
                '&::-webkit-scrollbar': {
                  width: 5,
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'white',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'lightgray',
                  borderRadius: 10,
                },
                height: '68vh',
                overflow: 'auto',
                // width: 100%,
                // border: solid 1px #EEE,
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                // overflow: 'scroll',
                position: 'relative',
              }}
            >
              <Box
                label='received'
                sx={{
                  position: 'relative',
                  borderRadius: 16,
                  padding: '4px 15px',
                  display: 'inline-block',
                  /* display: flex; */
                  /* flex-direction: column; */
                  mt: '5px',
                  mb: '5px',
                  mr: 'auto',
                  background: '#e5e5ea',
                  color: 'black',
                  float: 'left',
                }}
              >
                hello
              </Box>
              <Box
                label='sent'
                sx={{
                  position: 'relative',
                  borderRadius: 16,
                  padding: '4px 15px',
                  display: 'inline-block',
                  /* display: flex; */
                  /* flex-direction: column; */
                  mt: '5px',
                  mb: '5px',
                  ml: 'auto',
                  background: '#4976BA',
                  color: 'white',
                  float: 'right',
                }}
              >
                hi there
              </Box>
            </Box>

            {/* This is the typing box */}
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <TextField
                required
                multiline
                // onChange={handleChange}
                id="message"
                label="Message"
                align='left'
                // defaultValue={editedFormValue.description}
                sx={{ width: '90%', mr: 'auto' }}
                maxRows={3}
              />
              <Button
                variant='contained'
                // onClick={handleSubmit}
                endIcon={<SendIcon />}
                sx={{ backgroundColor: '#4976BA', fontWeight: 'bold', mr: 'auto', mt: 'auto', width: '90px', height: '55px' }}
              >
                Send
              </Button>
            </Box>
          </Item>
        </Grid>

      </Grid>
    </Grid>
  );
}