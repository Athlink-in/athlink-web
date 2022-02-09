import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import NavBar from './NavBar';
import PostModal from './PostModal';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainContent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>This is where the tools will go</Item>
        </Grid>
        <Grid item xs={7}>
          <Item>This is for the feed</Item>
        </Grid>
      </Grid>
      <PostModal />
    </Box>
  );
}
