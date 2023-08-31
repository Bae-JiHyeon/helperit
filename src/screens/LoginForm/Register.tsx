//회원 가입 화면 텍스트 인풋 손봐야함(추가 해야 하는것들: 1. 아이디 최소 4자리 이상으로 적게 하기, 중복 확인, 비밀번호  최소 8자리 이상
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    ScrollView, Pressable
} from "react-native";
import { useEffect, useState } from "react";
import { useRef} from 'react';
import axios, {isAxiosError, AxiosResponse} from "axios";
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "../../types/navigation";

interface userData {
    userID: string;
    password: string;
    confirmPass: string;
    userName: string;
    nickname: string;
}
const Register = ({navigation}:NativeStackScreenProps<LoginStackParamList>) => {

    const [userID, setUserID] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPass, setConfirmPass]= useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [nickname, setNickName] = useState<string>('');
    const [errorMessage, setErrorMessage] =useState('');
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading]=useState()

    const CheckRef = useRef(true);

    useEffect(() => {
        setDisabled(
            !(userID && password && confirmPass && userName && nickname && !errorMessage),
        );
    }, [userID, password, confirmPass, userName, nickname, errorMessage]);

    useEffect(() => {
            let _errorMassage: string = '';
            if(!userID){
                _errorMassage = '아이디 입력해주세요';
            } else if (password.length < 8){
                _errorMassage = '8자 이상의 비밀번호를 입력해주세요';
            } else if (password !== confirmPass){
                _errorMassage = '입력하신 비밀번호가 일치하지 않습니다';
            } else if (!userName){
                _errorMassage = '이름을 입력해주세요';
            } else if (!nickname){
                _errorMassage = '별명을 입력해주세요';
            } else {
                _errorMassage ='';
            }
            setErrorMessage(_errorMassage);
    }, [userID, password, confirmPass, userName, nickname]);

    const SignUp = async () => {
        try {
            const userData: userData = {
                userID,
                password,
                confirmPass,
                userName,
                nickname,
            };

            const response = await axios.post('https://api.example.com/register', userData);

            console.log('User registered successfully:', response.data);

            // 이후 필요한 동작 수행 (예: 회원가입 완료 후 화면 이동 등)
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    console.log("User ID:", userID);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPass);
    console.log("User Name:", userName);
    console.log("Nickname:", nickname);
    return(
        <ScrollView style={styles.container}>
            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                <View style={styles.loginFormContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>아이디</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="아이디 입력"
                            maxLength={15}
                            autoCapitalize="none"
                            value={userID}
                            onChangeText={value =>setUserID(value)}
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

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>이름</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="이름 입력"
                            maxLength={5}
                            autoCapitalize="none"
                            value={userName}
                            onChangeText={value =>setUserName(value)}
                            keyboardType="email-address"
                        />
                    </View>

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
                </View>
            </View>


            <Pressable
                style={styles.buttonLogin}
                onPress={SignUp}
                disabled={disabled}>
                <Text style={styles.otherText}>회원가입</Text>
            </Pressable>

        </ScrollView>
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