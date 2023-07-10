import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Button,
    Pressable
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";


import JobScreen from "./JobScreen";
import ProceedingScreen from "./ProceedingScreen";
import AbilityScreen from "./AbilityScreen";
import HelperTalkScreen from "./HelperTalkScreen";
import MyPageScreen from "./MyPageScreen"
import PerformanceHistory from "./MyPageList/PerformanceHistory";
import EditProfile from "./MyPageList/EditProfile";
import CustomerReview from "./MyPageList/CustomerReview";
import {HelperMyPageStackParamList} from "../../types/navigation";

const Tap = createBottomTabNavigator();
const Stack = createStackNavigator<HelperMyPageStackParamList>()

const HelperMyPageStack = () =>{
    return(
        <Stack.Navigator initialRouteName={"MyPageScreen"}>
            <Stack.Screen name="마이 페이지" component={MyPageScreen}/>
        </Stack.Navigator>
    );
}

const HelperHome = () => {
    return(
        <NavigationContainer>
            <Tap.Navigator initialRouteName={"jobScreen"}>
                <Tap.Screen name="잡기" component={JobScreen}/>
                <Tap.Screen name="진행중" component={ProceedingScreen}/>
                <Tap.Screen name="재능등록" component={AbilityScreen}/>
                <Tap.Screen name="헬퍼톡" component={HelperTalkScreen}/>
                <Tap.Screen name="마이" component={MyPageScreen}/>
            </Tap.Navigator>
        </NavigationContainer>
    );
};

export default HelperHome;
