import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { useAuth } from './contexts/authContext';
import NavBar from './NavBar';
// import CardThing from './Feed';
import Feed from './Feed';

export default function PostPage() {
  const params = useParams();
  // const { currentUser } = useAuth();
  const [feed, setFeed] = useState();
  const postId = params.postId ?? '';
  console.log(postId);

  useEffect(() => {
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/post`;
    axios.get(backend, { params: { postId } }).then((data) => setFeed(data.data)).then(console.log(feed));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
      <Grid container spacing={2} justifyContent='center' sx={{ mt: 1 }}>
        <Grid
          item
          xs={6}
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
          {/* This is for the feed */}
          <Feed feed={feed} />
        </Grid>
      </Grid>
    </Box>
  );
}
