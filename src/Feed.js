import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Brandon from './logos/brandon.png';
import Kee from './logos/kee.png';
// import Ishaan from './logos/ishaan.png';
// import Phani from './logos/phani.png';

// General structure of a post in the feed
// Need to retrieve posts and use mapping to display in this way

export default function Feed() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={(
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Brandon Burana" src={Brandon} sx={{ width: 56, height: 56 }} />
              </ListItemAvatar>
              <Box ml={2}>
                <Typography fontSize={18} fontWeight='bold'>
                  Brandon Burana
                </Typography>
                <Typography variant='body2' fontSize={14}>
                  Ridgeview High School - 2018
                </Typography>
              </Box>
            </ListItem>
          )}
          secondary={(
            <ListItem>
              <Box>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Testing...Testing...Testing...Testing...Testing...Testing...
                  Testing...Testing...Testing...Testing...Testing...Testing...
                  Testing...Testing...Testing...Testing...Testing...Testing...
                  Testing...Testing...Testing...Testing...Testing...Testing...
                  Testing...Testing...Testing...Testing...Testing...Testing...
                  Testing...Testing...Testing...Testing...Testing...Testing...
                  Testing...Testing...Testing...Testing...Testing...Testing...
                </Typography>
              </Box>
            </ListItem>
          )}
        />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={(
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Keerat Grewal" src={Kee} sx={{ width: 56, height: 56 }} />
              </ListItemAvatar>
              <Box ml={2}>
                <Typography fontSize={18} fontWeight='bold'>
                  Keerat Grewal
                </Typography>
                <Typography variant='body2' fontSize={14}>
                  Folsom High School - 2018
                </Typography>
              </Box>
            </ListItem>
          )}
          secondary={(
            <ListItem>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Hello
              </Typography>
            </ListItem>
          )}
        />
      </ListItem>
      <Divider />
    </List>
  );
}
