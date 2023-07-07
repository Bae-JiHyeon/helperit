import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RequestPage from './UserMode_Screens/RequestPage';
import Home from './Home';
import StackNavigator from './Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
