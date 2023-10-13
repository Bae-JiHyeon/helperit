import React from 'react';
import StackNavigator from './src/Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HelperHome from "./src/screens/HelperMode/HelperHome";
import JobSelect from "./src/screens/Job/JobSelect";
import Working from "./src/screens/Job/Working";
import Test from "./src/Test";
import LoginFormNavigator from "./src/screens/LoginForm/LoginFormNavigator";
import { AuthProvider } from "./src/API/AuthContext";


const App = () => {
        return (
          <NavigationContainer>
            <AuthProvider>
              <SafeAreaProvider>
                <StackNavigator/>
              </SafeAreaProvider>
            </AuthProvider>
          </NavigationContainer>
        );
};

export default App;
