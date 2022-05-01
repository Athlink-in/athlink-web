import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/authContext';
import { WebsocketProvider } from './contexts/websocketContext';
import PrivateRoute from './PrivateRoute';
import MainContent from './mainContent';
import About from './About';
import Profile from './Profile';
import Messages from './Messages';
import PostPage from './PostPage';
import Login from './Login';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path='/' element={<PrivateRoute />}>
        <Route exact path='/' element={<MainContent />} />
        {/* <Route exact path='/about' element={<About />}> </Route> */}
        <Route exact path='/profile' element={<Profile />}> </Route>
        <Route path="/profile/:email" element={<Profile />} />
        <Route exact path='/messages' element={<Messages />} />
        <Route path='/post/:postId' element={<PostPage />} />
      </Route>
      <Route exact path='/about' element={<About />}> </Route>
    </Routes>

  );
}

export default function () {
  const { currentUser } = useAuth();
  if (currentUser) {
    return (
      <div>
        (
        <WebsocketProvider>
          <AppRoutes />
        </WebsocketProvider>
        )
      </div>
    );
  }
  return (
    <AppRoutes />
  );
}
