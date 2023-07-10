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
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "../../types/navigation";

const Register = ({navigation}:NativeStackScreenProps<LoginStackParamList>) => {

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRePass]= useState('');
    const [userName, setUserName] = useState('');
    const [Nickname, setNickName] = useState('');
    const [errorMessage, setErrorMessage] =useState('');

    const userIDRef = useRef();
    const passwordRef = useRef();
    const repassRef = useRef();
    const userNameRef = useRef();
    const nicknameRef = useRef();
    const CheckRef = useRef();

    useEffect(() =>{
        if (CheckRef.current){
            let _errorMassage = '';
            if(!userID){
                _errorMassage = '아이디 입력해주세요'
            } else if (password.length < 8){
                _errorMassage = '8자 이상의 비밀번호를 입력해주세요'
            } else if (password !== repass){
                _errorMassage = '입력하신 비밀번호가 일치하지 않습니다'
            } else if (!userName){
                _errorMassage = '이름을 입력해주세요'
            } else if (!Nickname){
                _errorMassage = '별명을 입력해주세요'
            } else {
                _errorMassage ='';
            }
            setErrorMessage(_errorMassage);
        } else {
            CheckRef.current = true;
        }
    }, [userID, password, repass, userName, Nickname]);

    const onSignUpPressed = () => {
        console.warn("onSignUpPressed");
    };

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
                            secureTextEntry
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
                            value={repass}
                            onChangeText={value => setRePass(value)}
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
                            value={Nickname}
                            onChangeText={value =>setNickName(value)}
                            keyboardType="email-address"
                        />
                    </View>
                </View>
            </View>


            <Pressable
                style={styles.buttonLogin}
                onPress={onSignUpPressed}
            >
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
        backgroundColor: '#92b8b1',
        width: Dimensions.get('window').width - 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
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
