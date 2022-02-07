// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import Logo from './logos/login_cover_2.png';
import NoTextLogo from './logos/logo_no_text.png';
// import SignInLogo from './logos/sign_in.png';
import { useAuth } from './contexts/authContext';

export default function Login() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    // console.log('submitted');
    // console.log(email);
    // console.log(password);
    await signup();
    navigate('/');
  });

  return (
    // <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
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
        {/* <Box
          component="img"
          sx={{
            height: '100vh',
            width: '100vh',
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={Logo}
        /> */}
        {/* <Typography
          component="h1"
          variant="h5"
          style={{
            fontFamily: 'Roboto', fontSize: 50, fontWeight: 'bolder', color: 'white',
          }}
        >
          Future of athletic recruitment
        </Typography> */}
      </Grid>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={8} square>
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
            {/* <TextField
              // onChange={(e) => setEmail(e.target.value)}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              // onChange={(e) => setPassword(e.target.value)}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            /> */}
            {/* <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                mt: 3, mb: 2, backgroundColor: '#FFBD59', fontWeight: 'bolder',
              }}
            >
              Sign In
            </Button> */}

            <GoogleLoginButton onClick={handleSubmit} style={{ width: 300, marginBottom: 15 }} />
            <FacebookLoginButton onClick={handleSubmit} style={{ width: 300, marginBottom: 15 }} />
            {/* <Grid container>
              <Grid item xs={6}>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  Dont have an account? Sign Up
                </Link>
              </Grid>
            </Grid> */}
          </Box>
          <Typography
            variant='body2'
            sx={{
              position: 'fixed', bottom: 8, fontWeight: 200,
            }}
          >
            <Link style={{ textDecoration: 'none' }} href='/about'>
              About us
            </Link>
          </Typography>
          <Typography
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
          </Typography>
        </Box>
      </Grid>
    </Grid>
    // </ThemeProvider>
  );
}
