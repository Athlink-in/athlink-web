import React, { useContext, createContext, useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useAuth } from './authContext';

const WebsocketContext = createContext(null);

export function useWebsocket() {
  const socket = useContext(WebsocketContext);
  console.log(socket);
  return socket;
}

export function WebsocketProvider({ children }) {
  const { currentUser } = useAuth();
  // const [ws, setWS] = useState();
  // const ws = useRef(null);
  const [socket, setSocket] = useState();
  // let socket;

  const url = `${process.env.REACT_APP_WEBSOCKET}/testWebsocket2/${currentUser.multiFactor.user.email}`;

  useEffect(() => {
    setSocket(new W3CWebSocket(url));
    return () => {
      socket.close();
    };
  }, []);
  useEffect(() => {
    if (socket) {
      socket.onopen = () => {
        console.log('connected to websocket!');
        // const data = { fromEmail: 'keeratg@gmail.com', toEmail: 'random', content: 'gord' };
        // socket.send(JSON.stringify(data));
      };
      socket.onclose = () => {
        console.log('Closing socket');
      };
    }
  }, [socket]);

  return (
    <div>
      {socket && (
      <WebsocketContext.Provider value={socket}>
        {children}
      </WebsocketContext.Provider>
      )}
    </div>
  );
}
