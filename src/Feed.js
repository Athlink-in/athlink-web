import React, { useState, useEffect } from 'react';
// import List from '@mui/material/List';
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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfiniteScroll from 'react-infinite-scroll-component';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import axios from 'axios';
import { useAuth } from './contexts/authContext';

// General structure of a post in the feed
// Need to retrieve posts and use mapping to display in this way
/* eslint-disable */
export function CardThing({ src, date, title, content, linkUrl, email, postId, likes, liked, feed }) {
  const { currentUser } = useAuth();
  const [likedState, setLikedState] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [commentValue, setComment] = useState();

  const updateLike = async () => {
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/post/like`;
    axios.post(backend, {}, { params: { postId, email: currentUser.multiFactor.user.email } }).catch(
      (error) => console.log(error),
    );
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!commentValue || commentValue == "") 
      return;
    setComments(prev => [{ 
      userEmail: currentUser.multiFactor.user.email, 
      commentContent: commentValue,
      userName: currentUser.multiFactor.user.displayName,
      photoUrl: currentUser.multiFactor.user.photoURL,
      timePosted: `${Date.now()}`,
      postId}, ...prev]);
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/post/comment`;
    axios.post(backend, {
      timePosted:null, 
      userEmail: currentUser.multiFactor.user.email, 
      commentContent: commentValue,
      postId
    }).then(setComment(""))
      
  };

  const handleComments = () => {
    setShowComments(!showComments);
  };

  const toggleLike = () => {
    setLikedState(!likedState);
    updateLike();
  };

  useEffect(() => {
    if (liked === likedState) {
      setLikesCount(likes);
    } else {
      setLikesCount(likedState ? likesCount + 1 : likesCount - 1);
    }
  }, [likedState]);

  useEffect(() => {
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/post/comment`;
    axios.get(backend, { params: { postId } }).then(data => setComments(data.data));
  }, [feed]);

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
              {title}
            </Link>
            )}
          subheader={date}
          sx={{ textAlign: 'left' }}
        />
        <CardContent>
          <Link href={`/post/${postId}`} sx={{ textDecoration: 'none' }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, mt: -2, textAlign: 'left', fontWeight: 600 }}>
              {content}
            </Typography>
          </Link>
          {linkUrl && (
          <iframe
            title='video'
            height='400'
            width='100%'
            src={linkUrl}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
          />
          )}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={toggleLike}>
            {likedState ? <FavoriteIcon sx={{ color: '#4976BA' }} /> : <FavoriteIcon />}
            {likesCount}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
            <TextField
              required
              multiline
              onChange={handleChange}
              size='small'
              id="comment-field"
              label="Add a comment..."
              align='left'
              value={commentValue}
              // defaultValue={editedFormValue.description}
              sx={{ width: '90%', mr: '5px' }}
              rows={1}
            />
            <Button
              variant='contained'
              onClick={handleSubmit}
              // endIcon={<SendIcon />}
              sx={{ backgroundColor: '#4976BA', fontWeight: 'bold', mr: 'auto' }}
            >
              Post
            </Button>
          </Box>

          <Box onClick={handleComments}>
            <Typography variant="body1" color="#4976BA" sx={{ mb: 2, mt: -1, textAlign: 'left', fontWeight: 600 }}>
              View {comments ? comments.length : 0} comments
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {showComments && comments && comments.map((x) => (
              <Comment email={x.userEmail} src={x.photoUrl} title={x.userName} date={`${new Date(parseInt(x.timePosted, 10)).toDateString()}`} content={x.commentContent} />
            ))}
          </Box>
        </CardContent>
      </Card>
      <Divider />
    </>
  );
}

function Comment({ email, src, date, title, content }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Link href={`/profile/${email}`} sx={{ textDecoration: 'none' }}>
        <Box
          component="img"
          sx={{
            height: 40,
            width: 40,
            borderRadius: '50%',
            mt: 2,
          }}
          src={src}
        />
      </Link>
      <Box
        sx={{
          // position: 'relative',
          // borderRadius: 16,
          // padding: '4px 15px',
          // display: 'inline-block',
          display: 'flex',
          flexDirection: 'column',
          mt: '5px',
          mb: '5px',
          ml: '5px',
          background: '#E0E0E0',
          color: 'white',
          width: '100%',
          borderRadius: '15px',
        }}
      >
        <Link href={`/profile/${email}`} sx={{ textDecoration: 'none' }}>
          <Typography variant="body1" color="#4976BA" sx={{ textAlign: 'left', ml: 2, fontWeight: 600 }}>
            {title}
          </Typography>
        </Link>
        <Typography variant="body1" color="black" sx={{ textAlign: 'left', ml: 2, fontWeight: 400 }}>
          {date}
        </Typography>
        <Typography variant="body1" color="black" sx={{ textAlign: 'left', mt: 2, ml: 2, mb: 1, fontWeight: 600 }}>
          {content}
        </Typography>
      </Box>

    </Box>
  );
}

export default function Feed({ feed }) {
  // function fetchData() {
  //   console.log('HIHIHIH');
  //   const backend = `${process.env.REACT_APP_BACKEND_HOST}/post`;
  //   axios.get(backend, { params: { limit: 5 } }).then((data) => setFeed((prev) => [...prev, data.data]));
  // }
  const { currentUser } = useAuth();
  const length = feed ? feed.length : 0;

  return (
    // <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    //   {hardCodedFeed.forEach((x) => console.log(x.src))}
    <InfiniteScroll dataLength={length} hasMore={true}>
      {feed && feed.map((x) => (
        <CardThing
          src={x.photoUrl}
          date={`${new Date(parseInt(x.timePosted, 10)).toDateString()}`}
          title={x.userName}
          content={x.postContent}
          linkUrl={x.linkUrl}
          email={x.userEmail}
          postId={x.postId}
          likes={x.likeCount}
          liked={x.likes.includes(currentUser.multiFactor.user.email)}
          comments={x.comments}
          feed={feed}
        />
      ))}
    </InfiniteScroll>
    // </List>
  );
}
