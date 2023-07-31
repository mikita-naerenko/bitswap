import { useEffect } from 'react';
import { dispatchUpdateData } from '../redux/actionCreator';


export const useWebSocketListeners = (favoriteCoins) => {
    // Websocket for update state for favorite coins page
  useEffect(() => {
    const socket = new WebSocket(`wss://ws.coincap.io/prices?assets=${favoriteCoins.join(',')}`);
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
      dispatchUpdateData(data)
    };

    socket.addEventListener('message', handleWebSocketMessage);

    return () => {
      socket.removeEventListener('message', handleWebSocketMessage);
      socket.close();
    };
  }, [favoriteCoins]);
};