import React from 'react';
import List from '@mui/material/List';
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
import Brandon from './logos/brandon.png';
import Kee from './logos/kee.png';
import Ishaan from './logos/ishaan.png';
import Phani from './logos/phani.png';

// General structure of a post in the feed
// Need to retrieve posts and use mapping to display in this way

export default function Feed() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Card>
        <CardHeader
          avatar={
            <Avatar alt='Brandon Burana' src={Brandon} aria-label="test2" sx={{ height: 48, width: 48 }} />
          }
          action={(
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )}
          titleTypographyProps={{ variant: 'inherit' }}
          subheaderTypographyProps={{ variant: 'inherit' }}
          title="Brandon Burana"
          subheader="February 13, 2022"
          sx={{ textAlign: 'left' }}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, mt: -2, textAlign: 'left', fontWeight: 600 }}>
            This game was so fun to watch!!!
          </Typography>
          <iframe
            title='video'
            height='400'
            width='100%'
            src="https://www.youtube.com/embed/8awd9v-TkU4"
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
          />
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

      <Card>
        <CardHeader
          avatar={
            <Avatar alt='Phaniraj Aenugula' src={Phani} aria-label="test2" sx={{ height: 48, width: 48 }} />
          }
          action={(
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )}
          titleTypographyProps={{ variant: 'inherit' }}
          subheaderTypographyProps={{ variant: 'inherit' }}
          title="Phaniraj Aenugula"
          subheader="February 13, 2022"
          sx={{ textAlign: 'left' }}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, mt: -2, textAlign: 'left', fontWeight: 600 }}>
            No Video Here, Just Testing
          </Typography>
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

      <Card>
        <CardHeader
          avatar={
            <Avatar alt='Keerat Grewal' src={Kee} aria-label="test3" sx={{ height: 48, width: 48 }} />
          }
          action={(
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )}
          titleTypographyProps={{ variant: 'inherit' }}
          subheaderTypographyProps={{ variant: 'inherit' }}
          title="Keerat Grewal"
          subheader="February 12, 2022"
          sx={{ textAlign: 'left' }}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary" sx={{ mt: -2, textAlign: 'left', fontWeight: 600 }}>
            Wow, Lamelo Ball is so good!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, textAlign: 'left', fontWeight: 600 }}>
            Testing overflow and multiline...Testing overflow and multiline...
            Testing overflow and multiline...Testing overflow and multiline...
            Testing overflow and multiline...Testing overflow and multiline...
          </Typography>
          <iframe
            title='video'
            height='400'
            width='100%'
            src="https://www.youtube.com/embed/y0VLJQdB_u8"
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
          />
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

      <Card>
        <CardHeader
          avatar={
            <Avatar alt='Ishaan Karvir' src={Ishaan} aria-label="test4" sx={{ height: 48, width: 48 }} />
          }
          action={(
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )}
          titleTypographyProps={{ variant: 'inherit' }}
          subheaderTypographyProps={{ variant: 'inherit' }}
          title="Ishaan Karvir"
          subheader="February 11, 2022"
          sx={{ textAlign: 'left' }}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, mt: -2, textAlign: 'left', fontWeight: 600 }}>
            No Video Here, Just Testing...No Video Here, Just Testing...
            No Video Here, Just Testing...No Video Here, Just Testing...
            No Video Here, Just Testing...No Video Here, Just Testing...
            No Video Here, Just Testing...No Video Here, Just Testing...
          </Typography>
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
    </List>
  );
}
