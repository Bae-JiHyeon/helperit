import React from 'react'
import { View, StyleSheet, Text} from "react-native";
import {Avatar, HStack} from "native-base";

function MyPageScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            <View style={styles.menu}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
    },
    menu: {
        flex: 3,
        backgroundColor: 'green',
    },
    footer: {
        flex: 1,
        backgroundColor: 'blue',
    },
});
export default MyPageScreen;


