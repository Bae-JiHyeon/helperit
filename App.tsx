import 'react-native-gesture-handler'
import React from 'react';
import {
  NativeAppEventEmitter,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Login from './src/screens/LoginForm/Login';
import Terms from "./src/screens/LoginForm/Terms"
import HelperHome from "./src/screens/HelperMode/HelperHome";
import CustomerReview from "./src/screens/HelperMode/MyPageList/CustomerReview";

export enum LoginScreens {
  Login = 'Login',
  Register = 'Register',
}
export type LoginStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<LoginStackParamList>()
const App = () => {
  return <CustomerReview/>
};
//(
   // <NavigationContainer>
   //   <Stack.Navigator>
   //     <Stack.Screen name='Login' component = {LoginScreens.Login}/>
   //     <Stack.Screen name='Register' component={LoginScreens.Register}/>
   //   </Stack.Navigator>
   // </NavigationContainer>
//);
export default App;
