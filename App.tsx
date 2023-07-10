import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RequestPage from './UserMode_Screens/RequestPage';
import Home from './Home';
import StackNavigator from './Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/LoginForm/Login';
import Register from './src/screens/LoginForm/Register';
import MyHelperInfo from './src/Components/MyHelperInfo';
import ProcessPressable from './src/Components/ProcessPressable';
import JobProcess from './src/screens/HelperMode/Poceeding/JobProcess';
import PerformanceHistory from './src/screens/HelperMode/MyPageList/PerformanceHistory';
import CustomerReview from './src/screens/HelperMode/MyPageList/CustomerReview';
import EditProfile from './src/screens/HelperMode/MyPageList/EditProfile';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
