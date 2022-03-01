import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function Tags({ setFeed }) {
  const [topTags, setTopTags] = useState([]);

  const handleClick = (e) => {
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/post?tag=${e.target.id}`;

    axios.get(backend).then((res) => {
      console.log('new feed');
      setFeed(res.data);
    });
  };

  useEffect(() => {
    console.log('inside useEffect profile');
    // console.log(currentUser.multiFactor.user.email);
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/post/trending`;
    axios.get(backend).then((res) => {
      console.log('TOP TAGS');
      setTopTags(res.data);
    });
  }, []);

  return (
    <>
      <Typography variant="h5" align='left' fontWeight='bold' sx={{ mb: 2 }}>
        Trending Tags
      </Typography>

      {topTags && topTags.map((tag) => (
        <Button
          onClick={handleClick}
          id={tag}
          variant="text"
          style={{
            width: '100%',
            marginBottom: 5,
            justifyContent: 'flex-start',
            fontWeight: 'bold',
          }}
        >
          #
          {tag}
        </Button>
      ))}
    </>
  );
}
