//약관 동의 화면
import React, {useEffect, useState} from "react"
import {View,  TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, Alert} from "react-native";
import {Checkbox, Button,Container, TextArea, VStack} from "native-base";
import { NativeBaseProvider } from 'native-base';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import serviceTerms from "./term/ServiceTerms";


import ServiceTerms from "./term/ServiceTerms";
import PrivacyTerms from "./term/PrivacyTerms";
import {LoginStackParamList} from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { background } from "native-base/lib/typescript/theme/styled-system";

const Terms=({navigation}:NativeStackScreenProps<LoginStackParamList>)=>{
    const [isServiceChecked, setIsServiceChecked]=useState(false)
    const [isPrivacyChecked, setIsPrivacyChecked]=useState(false)
    const [ad, setAd] = useState(false)

    const handleCheckAll = () => {
        // 전체 동의하기 버튼을 눌렀을 때, 모든 체크박스를 true로 설정
        setIsServiceChecked(true);
        setIsPrivacyChecked(true);
        setAd(true);
    };
    const handleNext = () =>{
        navigation.navigate('Register', {ad});
    }
    console.log('1확인', isServiceChecked)
    console.log('2확인', isPrivacyChecked)
    console.log('광고', ad);
    return(
        <NativeBaseProvider>
            <View></View>
            <View style={styles.container}>
                <View style={styles.signInTextContainer}>
                    <Text style={styles.signInText}>회원가입</Text>
                    <Text style={styles.signInText}>약관에 동의해 주세요.</Text>
                </View>
                <View style={{ height: 150,  padding: 0, marginTop: '2%',}}>
                    <Checkbox value={isServiceChecked} onChange={setIsServiceChecked} size="md">서비스 이용 약관 (필수)</Checkbox>
                    <ScrollView>
                        <ServiceTerms/>
                    </ScrollView>
                </View>
                <View>
                    <View style={{ height: 150,  padding:0, marginTop: '2%',}}>
                        <Checkbox value={isPrivacyChecked} onChange={setIsPrivacyChecked} size="md">개인정보보호를 위한 이용자 동의 (필수)</Checkbox>
                        <ScrollView>
                            <PrivacyTerms/>
                        </ScrollView>
                    </View>
                </View>
                    <View style={{padding:0}}>
                        <Checkbox value={ad} onChange={setAd} size="md">마케팅 수신 정보 동의 (선택)</Checkbox>
                    </View>
                <View style={{marginTop: '10%',}}>
                    <Checkbox onChange={handleCheckAll} size="md">전체 동의 하기</Checkbox>
                </View>
                <View style={{marginTop: '20%',}}>
                    <Button onPress={() => {
                                if (isServiceChecked && isPrivacyChecked) {
                                    handleNext();
                                }
                            }}
                            disabled={!isServiceChecked || !isPrivacyChecked}
                            style={{
                                backgroundColor:
                                  isServiceChecked && isPrivacyChecked
                                    ? '#34BEBA'
                                    : 'gray', // 비활성화 상태일 때 회색으로 설정
                            }}>
                        <Text>확인</Text>
                    </Button>
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
        backgroundColor: "#FFFFFF"
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
