import React from 'react';
import StackNavigator from './src/Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HelperHome from "./src/screens/HelperMode/HelperHome";
import JobSelect from "./src/screens/Job/JobSelect";
import Working from "./src/screens/Job/Working";
import Test from "./src/Test";
import LoginFormNavigator from "./src/screens/LoginForm/LoginFormNavigator";

const App = () => {
        return (
            <SafeAreaProvider>
                    <NavigationContainer>
                            <LoginFormNavigator/>
                    </NavigationContainer>
            </SafeAreaProvider>
        );
};

export default App;
