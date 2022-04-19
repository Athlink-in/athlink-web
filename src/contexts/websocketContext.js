import React, { useContext, createContext, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const url = 'ws://localhost:8080/testWebsocket2/keeratg@gmail.com';

const ws = new W3CWebSocket(url);

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