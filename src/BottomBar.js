import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const links = [
  { name: 'About',
    ref: '/about' },
  { name: 'Placeholder',
    ref: null },
  { name: 'Placeholder',
    ref: null },
  { name: 'Placeholder',
    ref: null }];

export default function BottomBar() {
  return (
    <AppBar position="static" style={{ background: '#FFFFFF' }} sx={{ position: 'fixed', bottom: 0, height: '5vh' }}>
      <Toolbar>
        <Grid container spacing={2} mb={3}>
          {links.map((link) => (
            <Grid item>
              <Link style={{ textDecoration: 'none' }} href={link.ref}>
                {link.name}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
