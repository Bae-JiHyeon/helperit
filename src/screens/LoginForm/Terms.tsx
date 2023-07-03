import React, {useEffect, useState} from "react"
import {View, Button, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, Alert} from "react-native";
import {Checkbox, Container, TextArea, VStack} from "native-base";
import { NativeBaseProvider } from 'native-base';
import { NativeStackScreenProps } from "@react-navigation/native-stack";


import ServiceTerms from "./ServiceTerms";

const Terms=()=>{
    const [isChecked, setIsChecked]=useState(false)

    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.signInTextContainer}>
                    <Text style={styles.signInText}>회원가입</Text>
                    <Text style={styles.signInText}>약관에 동의해 주세요.</Text>
                </View>
                <ScrollView>
                    <View style={{ flex: 1, padding: 20 }}>
                        <Text>dwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadwadawsawdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
                    </View>
                </ScrollView>
                <View style={styles.signInTextContainer}>

                </View>
            </View>
        </NativeBaseProvider>
    )
};

const styles = StyleSheet.create({
    signInTextContainer: {
        flex:1,
        marginTop: '5%',
        marginLeft: '5%',

    },
    signInText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#000000',
        lineHeight: 29.3,
    },
    signInTextS: {
        fontSize: 12,
        fontWeight: '300',
        color: '#000000',
        marginTop: 5,
        marginBottom: 50,
    },
    container: {
        flex: 1,
        padding: 16,
    },

    textInput: {
        fontSize: 16,
        lineHeight: 24,
        height: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
    },
    scrollView: {
        flex: 1,
    },
    ButtonContainer:{
        flexDirection: 'row',
        display: 'flex',
        marginTop: 15
    },
});

export default Terms;
