import {useNavigation} from '@react-navigation/native';
import React, {ReactElement} from 'react';

export const checker = ({item1, item2, item3}: any) => {
  const navigation = useNavigation();

  if (item1 !== '' && item1 === item2 && item2 === item3) {
    navigation.navigate('popUp');
  }
};
