import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Choose, PlayGround} from '../screens';

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="pick" component={Choose} />
      <Stack.Screen name="playGround" component={PlayGround} />
    </Stack.Navigator>
  );
};
