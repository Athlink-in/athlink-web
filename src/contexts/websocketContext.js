import React, { useContext, createContext, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useAuth } from './authContext';

const { currentUser } = useAuth();
const url = `${process.env.REACT_APP_BACKEND_HOST}/testWebsocket2/${currentUser.multiFactor.user.email}`;

const ws = new W3CWebSocket(url);

ws.onopen = () => {
  console.log('connected to websocket!');
};

const WebsocketContext = createContext(ws);

export function useWebsocket() {
  return useContext(WebsocketContext);
}

export function WebsocketProvider({ children }) {
  useEffect(() => {
    // ws.onopen = () => {
    //   console.log('connected to websocket!');
    //   const data = { fromEmail: 'keeratg@gmail.com', toEmail: 'random', content: 'gord' };
    //   ws.send(JSON.stringify(data));
    // };
  }, []);

  return (
    <div>
      <WebsocketContext.Provider value={ws}>
        {children}
      </WebsocketContext.Provider>
    </div>
  );
}
