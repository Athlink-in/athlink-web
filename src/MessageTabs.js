import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';

export default function MessageTabs() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
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
    </Grid>
  );
}
