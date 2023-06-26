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
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import HelperHome from "./src/screens/HelperMode/HelperHome";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "./src/types/navigation";

const Stack = createStackNavigator<MainStackParamList>()
const App = () => {
  return <HelperHome/>
};
//(
   // <NavigationContainer>
   //   <Stack.Navigator>
   //     <Stack.Screen name='Login' component = {Login}/>
   //     <Stack.Screen name='Register' component={Register}/>
   //   </Stack.Navigator>
   // </NavigationContainer>
//);
export default App;
