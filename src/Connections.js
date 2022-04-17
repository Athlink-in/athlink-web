/* eslint-disable */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import InfiniteScroll from 'react-infinite-scroll-component';



export function DisplayProfile({ src, title, email }) {

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
          // subheader={date}
          sx={{ textAlign: 'left' }}
        />
        {/* <CardContent>
          hi there
        </CardContent> */}
      </Card>
      <Divider />
    </>
  );
}


export default function Connections() {
  const { email } = useParams();
  const [connections, setConnections] = useState(); ``

  useEffect(() => {
    const backend = `${process.env.REACT_APP_BACKEND_HOST}/user/connections/${email}`;
    axios.get(backend).then((data) => setConnections(data.data)).then((data) => console.log(data));
  }, []);
  return (
    <div>
      {connections && connections.map(x => (<DisplayProfile
        src={x.photoURL}
        title={x.firstname + " " + x.lastname}
        email={x.email}
      ></DisplayProfile>))}
    </div>
  );
}
