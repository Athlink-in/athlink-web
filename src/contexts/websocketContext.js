import React, { useContext, createContext } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useAuth } from './authContext';

// const url = `${process.env.REACT_APP_WEBSOCKET}/testWebsocket2/keeratg@gmail.com`;

// const ws = new W3CWebSocket(url);

// ws.onopen = () => {
//   console.log('connected to websocket!');
// };

// const WebsocketContext = createContext(ws);
const WebsocketContext = createContext(null);
// export function getUserEmail() {
//   const { currentUser } = useAuth();
//   return (currentUser.multiFactor.user.email);
// }

export function useWebsocket() {
  const { socket } = useContext(WebsocketContext);
  console.log(socket);
  return socket;
}

export function WebsocketProvider({ children }) {
  const { currentUser } = useAuth();
  // const [ws, setWS] = useState();
  // const ws = useRef(null);
  let socket;
  let ws;

  const url = `${process.env.REACT_APP_WEBSOCKET}/testWebsocket2/${currentUser.multiFactor.user.email}`;

  if (!socket) {
    socket = new W3CWebSocket(url);

    socket.onopen = () => {
      console.log('connected to websocket!');
      const data = { fromEmail: 'keeratg@gmail.com', toEmail: 'random', content: 'gord' };
      socket.send(JSON.stringify(data));
    };

    ws = {
      socket,
    };
  }

  return (
    <div>
      <WebsocketContext.Provider value={ws}>
        {children}
      </WebsocketContext.Provider>
    </div>
  );
}
