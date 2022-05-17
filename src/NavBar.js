/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import SearchIcon from '@mui/icons-material/Search';
// import Button from '@mui/material/Button';
import DisplayProfile from './Connections';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from './logos/logo_side_text.png';
import { useAuth } from './contexts/authContext';
import { useWebsocket } from './contexts/websocketContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function NavBar() {
  const { signout, currentUser } = useAuth();
  // const handleProfileOpen = () => (
  //   <Link to='/profile' />
  // );
  const [userSearch, setSearch] = useState('');
  const [map, setMap] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const ws = useWebsocket();

  // search for people
  useEffect(async () => {
    if (userSearch !== '') {
      const backend = `${process.env.REACT_APP_BACKEND_HOST}/user/search`;
      // const data =  await axios.get(backend).then((data) => {
      //   let temp = data.data.slice()
      //   let res = []
      //   let maptemp = {}
      //   for(let i = 0; i < temp.length; i++){
      //     console.log(temp[i]);
      //     maptemp[temp[i].email] = temp[i]
      //   }
      //   setMap(maptemp);
      //   //sleep(500);
      //   await new Promise(r => setTimeout(r, 2000));
      //   setSearchResults(data.data);
      // });
      const data =  await axios.get(backend, {value: userSearch})
      let temp = data.data.slice()
      let maptemp = {}
      for(let i = 0; i < temp.length; i++){
        console.log(temp[i]);
        maptemp[temp[i].email] = temp[i]
      }
      setMap(maptemp);
      //sleep(500);
      await new Promise(r => setTimeout(r, 500));
      setSearchResults(data.data);
      
      //console.log(searchResults);
    }
    else {
      setSearchResults([]);
    }
  }, [userSearch]);

  // // search for posts
  // useEffect(() => {
  //   if (userSearch !== '') {
  //     const backend = `${process.env.REACT_APP_BACKEND_HOST}/post/search/${userSearch}`;
  //     axios.get(backend).then((data) => {
  //       // console.log(data)
  //       let temp = data.data.slice()
  //       let res = []
  //       for(let i = 0; i < temp.length; i++){
  //         // console.log(temp[i]);
  //         res.push(`${temp[i].userEmail} ${temp[i].postContent.slice(0,10)}`)
  //       }
  //       setSearchResults(prev => [...prev, res]);
  //     });
  //     //console.log(searchResults);
  //   }
  //   else {
  //     setSearchResults([]);
  //   }
  // }, [userSearch]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    //console.log(userSearch);
  };

  const logout = () => {
    signout();
    ws.close();
  };

  const settings = [
    {
      name: 'Home',
      fun: '/' },
    { name: 'Profile',
      fun: '/profile' },
    { name: 'Logout',
      fun: logout }];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      sx={{ mt: '45px' }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem style={{ pointerEvents: 'None' }} sx={{ fontWeight: 'bold' }}>
        {currentUser.multiFactor.user.displayName}
      </MenuItem>
      {settings.map((setting) => (
        <Link href={setting.fun} color='inherit' style={{ textDecoration: 'None' }}>
          <MenuItem key={setting.name} onClick={setting.fun}>
            {setting.name}
            <Divider />
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" style={{ background: '#4976BA' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Link href='/'>
              <Box
                component='img'
                sx={{
                  mt: -1, // margin-top
                  height: 45,
                  width: 190,
                }}
                src={Logo}
              />
            </Link>
          </IconButton>
          <Box sx={{ display: 'flex', flexDirection: 'row'}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              {/* <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
              /> */}
            </Search>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={searchResults}
                getOptionLabel={(x) => 
                  `${x.email}`
                }
                renderOption={(x) => {
                  let val = map[x.key];
                  let realName = `${val.firstname} ${val.lastname}`

                  return (
                    <Card>
                      <CardHeader
                        avatar={(
                          <Link href={`/profile/${val.email}`} sx={{ textDecoration: 'none' }}>
                            <Avatar
                              alt={realName}
                              src={val.photoURL}
                              aria-label="test2"
                              sx={{ height: 48, width: 48 }}
                            />
                          </Link>
                        )}
                        action={(
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        )}
                        titleTypographyProps={{ variant: 'inherit' }}
                        subheaderTypographyProps={{ variant: 'inherit' }}
                        title={(
                          <Link href={`/profile/${val.email}`} sx={{ textDecoration: 'none' }}>
                            {`${val.firstname} ${val.lastname}`}
                          </Link>
                          )}
                        sx={{ textAlign: 'left' }}
                      />
                    </Card>);
                }}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField size="normal" sx={{marginLeft: 5, backgroundColor: 'white'}} onChange={handleChange} {...params} label="Search" />}
              />
            {/* <TableContainer>
              <Table>
                <TableBody>
                  {searchResults.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="left">
                        `${row.firstname}
                        {row.lastname}`
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> */}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Link href='/messages' color='inherit' style={{ textDecoration: 'None' }}>
                <Badge badgeContent={0} color="error">
                  <MailIcon />
                </Badge>
              </Link>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default NavBar;
