import React from 'react';
import Home from './Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RequestTutorial from './UserMode_Screens/RequestTutorial';

const App = () => {
  return (
    <SafeAreaProvider>
      <RequestTutorial />
    </SafeAreaProvider>
  );
};

export default App;
