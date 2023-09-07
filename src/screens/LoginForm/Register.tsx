//회원 가입 화면 텍스트 인풋 손봐야함(추가 해야 하는것들: 1. 아이디 최소 4자리 이상으로 적게 하기, 중복 확인, 비밀번호  최소 8자리 이상
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    ScrollView, Pressable
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRef} from 'react';
import axios, {isAxiosError, AxiosResponse} from "axios";
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "../../types/navigation";
import { NativeBaseProvider, HStack, Radio } from "native-base";

interface userData {
    email: string;
    password: string;
    name: string;
    nickname: string;
    gender: string;
}
const Register = ({route}:NativeStackScreenProps<LoginStackParamList>) => {
    const {ad} = route.params;


    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPass, setConfirmPass]= useState<string>('');
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>();
    const [nickname, setNickName] = useState<string>('');
    const [gender, setGender] = useState('');
    const [errorMessage, setErrorMessage] =useState('');
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading]=useState()

    const CheckRef = useRef(true);

    useEffect(() => {
        setDisabled(
            !(email && password && confirmPass && name && nickname && age && !errorMessage),
        );
    }, [email, password, confirmPass, name, nickname, age, errorMessage]);

    useEffect(() => {
            let _errorMassage: string = '';
            if(!email){
                _errorMassage = '아이디 입력해주세요';
            } else if (password.length < 8){
                _errorMassage = '8자 이상의 비밀번호를 입력해주세요';
            } else if (password !== confirmPass){
                _errorMassage = '입력하신 비밀번호가 일치하지 않습니다';
            } else if (!name){
                _errorMassage = '이름을 입력해주세요';
            } else if (!nickname){
                _errorMassage = '별명을 입력해주세요';
            } else {
                _errorMassage ='';
            }
            setErrorMessage(_errorMassage);
    }, [email, password, confirmPass, name, nickname]);

    const SignUp =  () => {
        const ageAsNumber = parseInt(age, 10);
        const userData = {nickname,email,name,password,age:ageAsNumber,gender,ad};
        const apiUrl = 'http://10.0.2.2:8000/user/signup/';

        // axios를 사용하여 POST 요청 보내기
        axios.post(apiUrl, JSON.stringify(userData),{
            headers:{
                'Content-Type': 'application/json',
            }
        })
          .then(response => {
              // 요청이 성공한 경우에 수행할 동작
              console.log('요청이 성공하였습니다.', response.data);
          })
          .catch(error => {
              // 요청이 실패한 경우에 수행할 동작
              console.error('요청이 실패하였습니다.', error);
              // 에러 처리 로직 추가
          });
        console.log(JSON.stringify(userData, null, 2));
    };



    console.log("User ID:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPass);
    console.log("User Name:", name);
    console.log("Age:", age);
    console.log("Nickname:", nickname);
    console.log("Gender:", gender);
    console.log("ad", ad);
    return(
      <NativeBaseProvider>
          <ScrollView style={styles.container}>
              <View style={{flex:1, alignItems: 'center', justifyContent:'center',}}>
                  <View style={styles.loginFormContainer}>
                      <View style={styles.inputContainer}>
                          <Text style={styles.inputLabel}>아이디</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="아이디 입력"
                            maxLength={50}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={value =>setEmail(value)}
                            keyboardType="email-address"
                          />
                      </View>

                      <View style={styles.inputContainer}>
                          <Text style={styles.inputLabel}>비밀번호</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="비밀번호 입력"
                            maxLength={21}
                            autoCapitalize="none"
                            autoComplete="off"
                            value={password}
                            onChangeText={value => setPassword(value)}
                            secureTextEntry={true}
                            keyboardType="email-address"/>
                      </View>


                      <View style={styles.inputContainer}>
                          <Text style={styles.inputLabel}>비밀번호 재확인</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="비밀번호 재확인"
                            maxLength={21}
                            autoCapitalize="none"
                            autoComplete="off"
                            value={confirmPass}
                            onChangeText={value => setConfirmPass(value)}
                            secureTextEntry
                            keyboardType="email-address"/>
                      </View>
                      <HStack>
                          <View >
                              <Text style={styles.inputLabel}>이름</Text>
                              <TextInput
                                style={[styles.input,{width: 150},{marginEnd:50}]}
                                placeholder="이름 입력"
                                maxLength={5}
                                autoCapitalize="none"
                                value={name}
                                onChangeText={value =>setName(value)}
                                keyboardType="email-address"
                              />
                          </View>
                          <View >
                              <Text style={[styles.inputLabel, {width: 150}]}>나이</Text>
                              <TextInput
                                style={styles.input}
                                placeholder="나이 입력"
                                maxLength={3}
                                autoCapitalize="none"
                                value={age}
                                onChangeText={value =>setAge(value)}
                                keyboardType="number-pad"
                              />
                          </View>
                      </HStack>


                      <View style={styles.inputContainer}>
                          <Text style={styles.inputLabel}>별명</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="별명 입력"
                            maxLength={10}
                            autoCapitalize="none"
                            value={nickname}
                            onChangeText={value =>setNickName(value)}
                            keyboardType="email-address"
                          />
                      </View>
                      <View style={styles.inputContainer}>
                          <Text style={styles.inputLabel}>성별</Text>
                          <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={gender} onChange={nextValue => {
                              setGender(nextValue);
                          }}>
                              <HStack space={2}>
                                  <Radio shadow={2} value="m" my={2}>
                                      <Text>남자</Text>
                                  </Radio>
                                  <Radio shadow={2} value="f" my={2}>
                                      <Text>여자</Text>
                                  </Radio>
                              </HStack>
                          </Radio.Group>
                      </View>

                  </View>
              </View>


              <Pressable
                style={styles.buttonLogin}
                onPress={SignUp}
                disabled={disabled}>
                  <Text style={styles.otherText}>회원가입</Text>
              </Pressable>

          </ScrollView>
      </NativeBaseProvider>

    )
}



const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
    },

    loginFormContainer:{
        width: Dimensions.get('window').width - 40,
    },

    inputContainer:{
        marginTop: 8,
        marginBottom: 16,
    },

    inputLabel: {
        fontWeight: '500',
        color: '#212121',
        fontSize: 16,
    },

    input: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 8,
        padding: 10,
        borderRadius: 100,
        minHeight: 40,
    },

    buttonLogin:{
        height: 40,
        backgroundColor: '#34BEBA',
        width: Dimensions.get('window').width - 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    buttonText:{
        fontSize: 18,
        color: '#ffffff'
    },

    otherText:{
        color: '#000000',
    },

    otherButton:{
        alignItems: 'center',
        justifyContent:'center'
    },

    otherButtonContainer:{
        justifyContent: 'center',
        flexDirection: 'row',

    }
})
export default Register;
