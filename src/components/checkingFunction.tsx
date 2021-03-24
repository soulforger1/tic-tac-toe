import {useContext} from 'react';
import {checker} from '../components';
import {Context} from '../provider/context';

export const CheckingFunction = () => {
  const {board}: any = useContext(Context);

  checker({item1: board[0][0], item2: board[0][1], item3: board[0][2]});
  checker({item1: board[1][0], item2: board[1][1], item3: board[1][2]});
  checker({item1: board[2][0], item2: board[2][1], item3: board[2][2]});

  checker({item1: board[0][0], item2: board[1][0], item3: board[2][0]});
  checker({item1: board[0][1], item2: board[1][1], item3: board[2][1]});
  checker({item1: board[0][2], item2: board[1][2], item3: board[2][2]});

  checker({item1: board[0][0], item2: board[1][1], item3: board[2][2]});
  checker({item1: board[0][2], item2: board[1][1], item3: board[2][0]});
};
