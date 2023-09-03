import React from 'react';
import StackNavigator from './src/Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HelperHome from "./src/screens/HelperMode/HelperHome";
import JobSelect from "./src/screens/Job/JobSelect";
import Working from "./src/screens/Job/Working";

const App = () => {
        return (
            <SafeAreaProvider>
                    <NavigationContainer>
                            <StackNavigator/>
                    </NavigationContainer>
            </SafeAreaProvider>
        );
};

export default App;
