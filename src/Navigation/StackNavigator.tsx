import {createStackNavigator} from '@react-navigation/stack';
import RequestPage from '../UserMode_Screens/RequestPage';
import RequestTutorial from '../UserMode_Screens/RequestTutorial';
import Home from '../../Home';
import RequestDetail from '../UserMode_Screens/RequestDetail';
import JobScreen from "../screens/HelperMode/JobScreen";
import JobSelect from "../screens/Job/JobSelect";

import Login from "../screens/LoginForm/Login"
import Register from "../screens/LoginForm/Register";
import {LoginStackParamList} from "../types/navigation";
import Terms from "../screens/LoginForm/Terms";
import ForgotPassword from "../screens/LoginForm/ForgotPassword";
import React, { useContext } from "react";
import {AuthContext} from "../API/AuthContext";
import JoinHelperStack from "../screens/JoinHelper/JoinHelperStack";
import PrimaryInfo from "../screens/JoinHelper/PrimaryInfo";
import Working from "../screens/Job/Working";

const Stack = createStackNavigator();

const StackNavigator = () => {
      const {userInfo} = useContext(AuthContext)
    return (
        <Stack.Navigator initialRouteName={'Home'}>
          {userInfo.token ? (
            <>
              <Stack.Screen name="Home" options={{headerTitle: '', headerShown: false}} component={Home}/>
              <Stack.Screen options={{headerTitle: '일거리 요청'}} name="RequestTutorial" component={RequestTutorial}/>
              <Stack.Screen options={{headerTitle: '일거리 요청'}} name="RequestPage" component={RequestPage} />
              <Stack.Screen name="RequestDetail" component={RequestDetail} options={{headerTitle: ''}} />
              <Stack.Screen name="JobScreen" component={JobScreen}/>
              <Stack.Screen name="JobSelect" options={{headerTitle: '일거리 선택', headerShown: true}} component={JobSelect} />
              <Stack.Screen name="JoinHelper" options={{headerTitle: '', headerShown: false}} component={JoinHelperStack}/>
              <Stack.Screen name="Working" options={{headerTitle: '수행', headerShown: true}}component={Working}/>
            </>
            ) : (
              <>
              <Stack.Screen name='Login' component = {Login} options={{ headerShown: false }}/>
              <Stack.Screen name={"ForgotPassword"} component={ForgotPassword} options={{ title: '비밀번호 찾기' }}/>
              <Stack.Screen name='Terms' component={Terms}/>
              <Stack.Screen name='Register' component={Register} options={{ title: '회원 가입' }}/>
              </>
            )}
        </Stack.Navigator>
    );
};

export default StackNavigator;
