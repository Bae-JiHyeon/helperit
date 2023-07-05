import React from 'react';
import Home from './Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RequestTutorial from './UserMode_Screens/RequestTutorial';
import RequestPage from './UserMode_Screens/RequestPage';

const App = () => {
  return (
    <SafeAreaProvider>
      <RequestPage />
    </SafeAreaProvider>
  );
};

export default App;
