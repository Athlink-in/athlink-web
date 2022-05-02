import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import ImageIcon from '@mui/icons-material/Image';
import NavBar from './NavBar';
import MessageTabs from './MessageTabs';
import { useAuth } from './contexts/authContext';
import { useWebsocket } from './contexts/websocketContext';

/* eslint-disable */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Message({ user, content }) {
  // const flag = user === currentUser.multiFactor.user.email
  return (
    <Box
      label={user ? 'sent' : 'received'}
      sx={{
        position: 'relative',
        borderRadius: 16,
        padding: '4px 15px',
        display: 'inline-block',
        /* display: flex; */
        /* flex-direction: column; */
        mt: '5px',
        mb: '5px',
        mr: user ? 'auto' : '5px',
        ml: user ? '5px' : 'auto',
        background: user ? '#4976BA' : '#e5e5ea',
        color: user ? 'white' : 'black',
        float: user ? 'left' : 'right',
        // background: '#4976BA',
        // color: 'white',
        // float: 'right',
      }}
    >
      {content}
    </Box>
  );
}

function MessageBox({ connection, currentUser }) {
  const { firstname, lastname, email } = connection;
  const ws = useWebsocket();
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      fromEmail: "karvirishaan@gmail.com",
      toEmail: "brandonburana2@gmail.com",
      content: "hi there",
      timeStamp: "312412431"
    },
    {
      fromEmail: "brandonburana2@gmail.com",
      toEmail: "karvirishaan@gmail.com",
      content: "bye",
      timeStamp: "312412431"
    },
  ])
  function handleMessageSubmit(){
    const message = {
      fromEmail : currentUser.multiFactor.user.email,
      toEmail : email,
      content : input,
      timeStamp : null 
    };
    ws.send(JSON.stringify(message));
    setMessages(prev => [...prev, message]);
  }

  useEffect(() => {
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/messages/${currentUser.multiFactor.user.email}/${email}`;
    axios.get(backend).then((data) => setMessages(data.data));
  }, [connection])
  
  useEffect(() => {


    ws.onmessage = (e) => {
      console.log(e)
      const data = JSON.parse(e.data)
      console.log("this is data" + data)
      if(data.toEmail === currentUser.multiFactor.user.email){
        setMessages(prev => [...prev, data])
      }
    }
  }, [])

  return(  
    <Grid item xs={6} style={{ maxHeight: '90vh' }}>
      <Item>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography
            variant="h6"
            fontWeight='bold'
            sx={{ mt: 1, ml: 'auto' }}
          >
            {`${firstname} ${lastname}`}
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
          {messages && messages.map(({ fromEmail, content }) => (
            <Message user={fromEmail !== currentUser.multiFactor.user.email} content={content} />
          ))}
        </Box>

        {/* This is the typing box */}
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            required
            multiline
            onChange={(e) => setInput(e.target.value)}
            id="message"
            label="Message"
            align='left'
            // defaultValue={editedFormValue.description}
            sx={{ width: '90%', mr: 'auto' }}
            maxRows={3}
            value={input}
          />
          <Button
            variant='contained'
            onClick={handleMessageSubmit}
            endIcon={<SendIcon />}
            sx={{ backgroundColor: '#4976BA', fontWeight: 'bold', mr: 'auto', mt: 'auto', width: '90px', height: '55px' }}
          >
            Send
          </Button>
        </Box>
      </Item>
    </Grid>
  );
}

export default function Messages() {
  const { currentUser } = useAuth();
  const ws = useWebsocket();
  const [currentMessageTab, setMessageTab] = useState();
  /* eslint-disable */
  const [connections, setConnections] = useState();

  useEffect(() => {
    if(connections)
      setMessageTab(connections[0]);
  }, [connections]);

  useEffect(() => {

    const backend = `${process.env.REACT_APP_BACKEND_HOST}/user/connections/${currentUser.multiFactor.user.email}`;
    axios.get(backend).then((data) => setConnections(data.data))
  }, [])
  return (
    <Grid container component='main'>
      <NavBar />
      <Grid container spacing={1} justifyContent='center' sx={{ mt: 1 }}>
        <MessageTabs tabs={connections} currentUser={currentUser} setTab={setMessageTab}/>
        {currentMessageTab && connections && <MessageBox connection={currentMessageTab} currentUser={currentUser}/>}
      </Grid>
    </Grid>
  );
}
