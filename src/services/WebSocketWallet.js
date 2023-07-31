import { useEffect } from 'react';
import { dispatchWalletData } from '../redux/actionCreator';


export const useWebSocketUpdataCostOfWallet = (coinsList) => {
  useEffect(() => {
    const socket = new WebSocket(`wss://ws.coincap.io/prices?assets=${coinsList.join(',')}`);
    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    const handleWebSocketMessage = (event) => {

      const data = JSON.parse(event.data);
    //   Dispatch by actionCreator because dispatching outside component
        // console.log(data);
        dispatchWalletData(data)
    };

    socket.addEventListener('message', handleWebSocketMessage);

    return () => {
      socket.removeEventListener('message', handleWebSocketMessage);
      socket.close();
    };
  }, [coinsList]);
};