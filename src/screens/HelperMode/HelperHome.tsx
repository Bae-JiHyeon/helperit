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
import MyPageScreen from "./MyPageScreen"
import ProceedingScreen from "./ProceedingScreen";


const Tap = createBottomTabNavigator();

function JobScreen(){
    return <Text>잡기 화면</Text>
}


function AbilityScreen(){
    return <Text>재능등록 화면</Text>
}

function HelperTalkScreen(){
    return <Text>헬퍼톡 화면</Text>
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
