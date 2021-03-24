import React, {createContext, useState} from 'react';

export const Context = createContext({});

export const ContextProvider: React.FC<any> = ({children}) => {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [player, setPlayer] = useState('');
  const [playersData, setPlayersData] = useState({});

  return (
    <Context.Provider
      value={{board, setBoard, player, setPlayer, playersData, setPlayersData}}>
      {children}
    </Context.Provider>
  );
};
