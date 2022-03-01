import React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from '@mui/material/Link';
// import axios from 'axios';
// import Brandon from './logos/brandon.png';
// import Kee from './logos/kee.png';
// // import Ishaan from './logos/ishaan.png';
// import Phani from './logos/phani.png';

// General structure of a post in the feed
// Need to retrieve posts and use mapping to display in this way

function CardThing({ src, date, title, content, linkUrl, email }) {
  return (
    <>
      <Card>
        <Link href={`/profile/${email}`} sx={{ textDecoration: 'none' }}>
          <CardHeader
            avatar={
              <Avatar alt='Brandon Burana' src={src} aria-label="test2" sx={{ height: 48, width: 48 }} />
            }
            action={(
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )}
            titleTypographyProps={{ variant: 'inherit' }}
            subheaderTypographyProps={{ variant: 'inherit' }}
            title={title}
            subheader={date}
            sx={{ textAlign: 'left' }}
          />
        </Link>
        <CardContent>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, mt: -2, textAlign: 'left', fontWeight: 600 }}>
            {content}
          </Typography>
          {linkUrl && (
          <iframe
            title='video'
            height='400'
            width='100%'
            src={linkUrl}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
          />
          )}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Divider />
    </>
  );
}

export default function Feed({ feed }) {
  // function fetchData() {
  //   console.log('HIHIHIH');
  //   const backend = `${process.env.REACT_APP_BACKEND_HOST}/post`;
  //   axios.get(backend, { params: { limit: 5 } }).then((data) => setFeed((prev) => [...prev, data.data]));
  // }
  const length = feed ? feed.length : 0;
  console.log(length);

  return (
    // <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    //   {hardCodedFeed.forEach((x) => console.log(x.src))}
    <InfiniteScroll dataLength={length} hasMore>
      {feed && feed.map((x) => (
        <CardThing
          src={x.photoUrl}
          date={`${new Date(parseInt(x.timePosted, 10)).toDateString()}`}
          title={x.userName}
          content={x.postContent}
          linkUrl={x.linkUrl}
          email={x.userEmail}
        />
      ))}
    </InfiniteScroll>
    // </List>
  );
}
