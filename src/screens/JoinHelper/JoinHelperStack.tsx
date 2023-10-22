//헬퍼 가입 스택 네비게이션
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { JoinHelperStackParamList} from "../../types/navigation";
import PrimaryInfo from "./PrimaryInfo";
import PrimaryInfoBank from "./PrimaryInfoBank";
import PrimaryInfoSpec from "./PrimaryInfoSpec";
import TermsModal from "./TermsModal";

const Stack = createStackNavigator<JoinHelperStackParamList>();
const JoinHelperStack = () =>{
    return(
            <Stack.Navigator initialRouteName={"PrimaryInfo"} screenOptions = {{ headerShown: false }}>
              <Stack.Screen name="PrimaryInfo" component={PrimaryInfo}/>
              <Stack.Screen name="PrimaryInfoBank" component={PrimaryInfoBank}/>
              <Stack.Screen name="PrimaryInfoSpec" component={PrimaryInfoSpec}/>
              <Stack.Screen name="TermsModal" component={TermsModal} options={{ headerShown: false }} />
            </Stack.Navigator>
    );
}
export default JoinHelperStack;
