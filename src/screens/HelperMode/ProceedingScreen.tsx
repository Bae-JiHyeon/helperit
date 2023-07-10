import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Pressable } from "native-base";
import JobComplete from "./Poceeding/JobComplete"
import JobProcess from "./Poceeding/JobProcess"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const ProceedingScreen =() => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="진행중" component={JobProcess} />
            <Tab.Screen name="완료" component={JobComplete} />
        </Tab.Navigator>
    );
}

export default ProceedingScreen;
