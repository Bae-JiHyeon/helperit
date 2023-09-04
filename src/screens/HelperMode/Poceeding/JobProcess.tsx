import React from 'react'
import {View, Text, StyleSheet, ScrollView} from "react-native";

import ProcessPressable from "../../../Components/ProcessPressable";
function JobProcess(){
    return(
        <ScrollView>
            <View style={{flex:1}}>
              <ProcessPressable/>
            </View>
        </ScrollView>
 );
}

export default JobProcess;
