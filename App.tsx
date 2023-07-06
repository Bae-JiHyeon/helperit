import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RequestPage from './UserMode_Screens/RequestPage';

const App = () => {
  return (
    <SafeAreaProvider>
      <RequestPage />
    </SafeAreaProvider>
  );
};

export default App;
