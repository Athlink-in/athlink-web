import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export function DisplayProfile({ src, first, last, email }) {
  return (
    <>
      <Card>
        <CardHeader
          avatar={(
            <Link href={`/profile/${email}`} sx={{ textDecoration: 'none' }}>
              <Avatar
                alt='Brandon Burana'
                src={src}
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
            <Link href={`/profile/${email}`} sx={{ textDecoration: 'none' }}>
              {`${first} ${last}`}
            </Link>
            )}
          sx={{ textAlign: 'left' }}
        />
      </Card>
      <Divider />
    </>
  );
}

export default function Connections({ connections, numConnections }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant='text' sx={{ fontWeight: 'bold', ml: -1 }}>
        {`${numConnections} connections`}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography
            variant="h4"
            align='left'
            fontWeight='bold'
          >
            Connections
          </Typography>
          <hr style={{ marginBottom: 20 }} />

          {connections && connections.map((x) => (
            <DisplayProfile
              src={x.photoURL}
              first={x.firstname}
              last={x.lastname}
              email={x.email}
            />
          ))}
        </Box>
      </Modal>
    </div>

  );
}
