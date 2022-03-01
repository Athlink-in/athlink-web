import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ModalUnstyled from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useAuth } from './contexts/authContext';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function PostModal({ setFeed }) {
  const { currentUser } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValue, setFormValue] = useState({
    userEmail: currentUser.multiFactor.user.email,
    postContent: '',
    timePosted: null,
    linkUrl: '',
    likes: 0,
    photoUrl: currentUser.multiFactor.user.photoURL,
    tags: [],
    userName: currentUser.multiFactor.user.displayName,
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/post`;
    // console.log(formValue);
    // console.log(backend);
    axios.post(backend, formValue).then(() => {
      formValue.timePosted = `${Date.now()}`;
      setFeed((prev) => [formValue, ...prev]);
    }).catch(
      (error) => console.log(error),
    );
    handleClose();
  };

  return (
    <div>
      <Fab
        color='primary'
        aria-label='add'
        sx={{ position: 'absolute', bottom: 16, right: 20, backgroundColor: '#4976BA' }}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2>Share Something...</h2>
          <TextField
            required
            fullWidth
            multiline
            onChange={handleChange}
            id="postContent"
            label="Text"
            rows={6}
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            onChange={handleChange}
            id="linkUrl"
            label="Video URL"
            sx={{ mb: 3 }}
          />
          <Button
            variant='contained'
            onClick={handleClose}
            sx={{ backgroundColor: '#4976BA', fontWeight: 'bold' }}
          >
            Close
          </Button>
          <Button
            variant='contained'
            onClick={handleSubmit}
            endIcon={<SendIcon />}
            sx={{ ml: 54, backgroundColor: '#4976BA', fontWeight: 'bold' }}
          >
            Post
          </Button>
        </Box>
      </StyledModal>
    </div>
  );
}
