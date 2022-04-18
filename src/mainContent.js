import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import axios from 'axios';
import NavBar from './NavBar';
import PostModal from './PostModal';
import Feed from './Feed';
import Tags from './Tags';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function MainContent() {
  const [feed, setFeed] = useState();

  useEffect(() => {
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/post`;
    axios.get(backend, { params: { limit: 30, slice: 0 } }).then((data) => setFeed(data.data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
      <Grid container spacing={2} justifyContent='center' sx={{ mt: 1 }}>
        <Grid item xs={2} sx={{ background: 'white' }}>
          {/* <Item>This is where the tools will go</Item> */}
          <Tags setFeed={setFeed} />
        </Grid>
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
        <Grid item xs={2} />
      </Grid>
      <PostModal feed={feed} setFeed={setFeed} />
    </Box>
  );
}
