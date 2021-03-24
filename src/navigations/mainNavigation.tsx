import React from 'react';
import {Choose, PlayGround, Win} from '../screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Stack = createSharedElementStackNavigator();

const modal = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({current: {progress}}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            scale: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ],
      },
    };
  },
};

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}>
      <Stack.Screen name="pick" component={Choose} />
      <Stack.Screen name="playGround" component={PlayGround} />
      <Stack.Screen name="popUp" component={Win} options={modal} />
    </Stack.Navigator>
  );
};
