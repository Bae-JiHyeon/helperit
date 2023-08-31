import React from 'react';
import StackNavigator from './Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
