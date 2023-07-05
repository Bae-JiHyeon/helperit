import React, {useEffect, useState} from "react"
import {View, Button, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, Alert} from "react-native";
import {Checkbox, Container, TextArea, VStack} from "native-base";
import { NativeBaseProvider } from 'native-base';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import serviceTerms from "./term/ServiceTerms";


import ServiceTerms from "./term/ServiceTerms";
import PrivacyTerms from "./term/PrivacyTerms";

const Terms=()=>{
    const [isChecked, setIsChecked]=useState(false)

    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.signInTextContainer}>
                    <Text style={styles.signInText}>회원가입</Text>
                    <Text style={styles.signInText}>약관에 동의해 주세요.</Text>
                </View>
                <View style={{ height: 150,  padding: 0, marginTop: '2%',}}>
                    <Checkbox value="one" size="md">서비스 이용 약관 (필수)</Checkbox>
                    <ScrollView>
                        <ServiceTerms/>
                    </ScrollView>
                </View>
                <View>
                    <View style={{ height: 150,  padding:0, marginTop: '2%',}}>
                        <Checkbox value="one" size="md">개인정보보호를 위한 이용자 동의 (필수)</Checkbox>
                        <ScrollView>
                            <PrivacyTerms/>
                        </ScrollView>
                    </View>
                </View>
                    <View style={{padding:0}}>
                        <Checkbox value="one" size="md">마케팅 수신 정보 동의 (선택)</Checkbox>
                    </View>
                <View style={{marginTop: '10%',}}>
                    <Checkbox value="one" size="md">전체 동의 하기</Checkbox>
                </View>
                <View style={{marginTop: '20%',}}>
                    <Button title="확인"></Button>
                </View>
            </View>
        </NativeBaseProvider>
    )
};

const styles = StyleSheet.create({
    signInTextContainer: {
        height: 100,
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
