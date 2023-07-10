//로그인 화면 네비게이터
import React from "react"
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./Login";
import Register from "./Register";
import {LoginStackParamList} from "../../types/navigation";
import Terms from "./Terms";
import ForgotPassword from "./ForgotPassword";


const Stack = createStackNavigator<LoginStackParamList>()

const LoginFormNavigator=()=>{
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Login' component = {Login} options={{ headerShown: false }}/>
                    <Stack.Screen name={"ForgotPassword"} component={ForgotPassword} options={{ title: '비밀번호 찾기' }}/>
                    <Stack.Screen name='Terms' component={Terms}/>
                    <Stack.Screen name='Register' component={Register} options={{ title: '회원 가입' }}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
};
export default LoginFormNavigator;
