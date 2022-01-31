import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import Logo from './logos/logo_orange.png';
import SignInLogo from './logos/sign_in.png';
import { useAuth } from './contexts/authContext';
// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       'Roboto',
//       'sans-serif'
//     ].join(','),
//   },
//   spacing: 8
// });

export default function Login() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   // console.log('submitted');
  //   // console.log(email);
  //   // console.log(password);
  //   await signup();
  //   navigate('/');
  // }

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
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          component="img"
          sx={{
            height: 500,
            width: 500,
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={Logo}
        />
        <Typography
          component="h1"
          variant="h5"
          style={{
            fontFamily: 'Roboto', fontSize: 50, fontWeight: 'bolder', color: 'white',
          }}
        >
          Future of athletic recruitment
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={8} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component='img'
            sx={{
              height: 150,
              width: 130,
            }}
            src={SignInLogo}
          />
          {/* <Typography component='h1' variant='h5'>
            Sign in
          </Typography> */}
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
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
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                mt: 3, mb: 2, backgroundColor: '#FFBD59', fontWeight: 'bolder',
              }}
            >
              Sign In
            </Button>
            <Grid container>
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
            </Grid>
          </Box>
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
