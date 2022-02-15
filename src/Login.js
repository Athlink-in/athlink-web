// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import Logo from './logos/login_cover_2.png';
import NoTextLogo from './logos/logo_no_text.png';
// import SignInLogo from './logos/sign_in.png';
import { useAuth } from './contexts/authContext';
import BottomBar from './BottomBar';

export default function Login() {
  const { signInGoogle, signInFacebook, currentUser } = useAuth();
  const navigate = useNavigate();

  console.log('login - ', currentUser);

  useEffect(() => {
    if (currentUser) {
      const { creationTime } = currentUser.multiFactor.user.metadata;
      const { lastSignInTime } = currentUser.multiFactor.user.metadata;
      console.log('inside create user');
      console.log(creationTime, lastSignInTime);
      if (currentUser.metadata.creationTime === currentUser.metadata.lastSignInTime) {
        const backend = `${process.env.REACT_APP_BACKEND_HOST}/user`;
        const name = currentUser.multiFactor.user.displayName.split(' ');
        const formValue = {
          firstname: name[0],
          lastname: name[1],
          email: currentUser.multiFactor.user.email,
          memberSince: null,
          height: null,
          age: null,
          school: '',
          weight: null,
          gradYear: null,
          sex: null,
          description: null,
        };

        axios.post(backend, formValue).then(
          (res) => console.log(res),
        ).catch(
          (error) => console.log(error),
        );
      }
    }
  }, [currentUser]);

  // const createUser = () => {
  //   const { creationTime } = currentUser.multiFactor.user.metadata;
  //   const { lastSignInTime } = currentUser.multiFactor.user.metadata;
  //   console.log('inside create user');
  //   console.log(creationTime, lastSignInTime);
  //   if (creationTime === lastSignInTime) {
  //     console.log('first time logged in');
  //     const backend = `${process.env.REACT_APP_BACKEND_HOST}/user`;
  //     const name = currentUser.multiFactor.user.displayName.split(' ');
  //     const formValue = {
  //       firstname: name[0],
  //       lastname: name[1],
  //       email: currentUser.multiFactor.user.email,
  //       memberSince: null,
  //       height: null,
  //       age: null,
  //       school: '',
  //       weight: null,
  //       gradYear: null,
  //       sex: null,
  //       description: null,
  //     };

  //     axios.post(backend, formValue).then(
  //       (res) => console.log(res),
  //     ).catch(
  //       (error) => console.log(error),
  //     );
  //   }
  // };

  const handleGoogle = useCallback(async (event) => {
    event.preventDefault();
    await signInGoogle();
    navigate('/');
  });

  const handleFB = useCallback(async (event) => {
    event.preventDefault();
    await signInFacebook();
    navigate('/');
  });

  return (
    // <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '95vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#4976BA',
          backgroundPosition: 'center',
        }}
      >
        <img src={Logo} alt="Login Cover" width='100%' height="100%" />
      </Grid>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={0} square>
        <Box
          sx={{
            mt: 20,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            // backgroundColor: 'red'
          }}
        >
          <Box
            component='img'
            sx={{
              height: 75,
              width: 100,
              marginTop: 2,
              marginLeft: -2,
              marginBottom: -1,
            }}
            src={NoTextLogo}
          />
          <Typography
            component="h1"
            variant="h4"
            align='left'
            fontWeight='bold'
            sx={{ mt: 10 }}
          >
            Future of athletic recruitment
          </Typography>

          <Typography align='left' component="h1" variant="h5" fontWeight='bold' sx={{ mt: 5 }}>
            Join Athlink - it&#39;s free!
          </Typography>

          <Box component='form' noValidate sx={{ mt: 5 }}>
            <GoogleLoginButton
              onClick={handleGoogle}
              style={{ width: 300, marginBottom: 15 }}
            />
            <FacebookLoginButton onClick={handleFB} style={{ width: 300, marginBottom: 15 }} />
          </Box>
          {/* <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            sx={{
              position: 'fixed', bottom: 0, right: 5, fontFamily: 'Roboto', fontWeight: 100,
            }}
          >
            {'© '}
            {new Date().getFullYear()}
            {' '}
            <Link color='inherit' href='https://athlink.in/'>
              Athlink.in, Inc.
            </Link>
          </Typography> */}
        </Box>
      </Grid>
      <BottomBar />
    </Grid>
    // </ThemeProvider>
  );
}
