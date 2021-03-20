import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {MainNavigation} from './navigations';
import {ContextProvider} from './provider/context';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <ContextProvider>
        <MainNavigation />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
