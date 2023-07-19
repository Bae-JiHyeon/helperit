//헬퍼 가입 스택 네비게이션
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { JoinHelperStackParamList} from "../../types/navigation";
import PrimaryInfo from "./PrimaryInfo";
import PrimaryInfoBank from "./PrimaryInfoBank";
import PrimaryInfoSpec from "./PrimaryInfoSpec";

const Stack = createStackNavigator<JoinHelperStackParamList>();
const JoinHelperStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"PrimaryInfo"} screenOptions = {{ headerShown: false }}>
                <Stack.Screen name="PrimaryInfo" component={PrimaryInfo}/>
                <Stack.Screen name="PrimaryInfoBank" component={PrimaryInfoBank}/>
                <Stack.Screen name="PrimaryInfoSpec" component={PrimaryInfoSpec}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default JoinHelperStack;
