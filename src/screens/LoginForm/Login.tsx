//로그인 화면
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    ScrollView,
    Pressable, Button
} from "react-native";
import {useContext, useState} from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from "../../types/navigation";
import { AuthContext } from "../../API/AuthContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = ({navigation}:NativeStackScreenProps<LoginStackParamList>) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userInfo, setUserInfo] = useState({});
    const {login, userData} = useContext(AuthContext);



    console.log("email:", email);
    console.log("Password:", password);
    console.log("token", userInfo);
    console.log("데이터", userData);
    return(
        <ScrollView style={styles.container}>
            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                <View style={styles.loginFormContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="아이디 입력"
                            maxLength={50}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={val =>setEmail(val)}
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="비밀번호 입력"
                            maxLength={21}
                            autoCapitalize="none"
                            autoComplete="off"
                            value={password}
                            onChangeText={val => setPassword(val)}
                            secureTextEntry={true}
                            keyboardType="email-address"/>
                    </View>
                </View>
            </View>

            <View style={styles.otherButtonContainer}>
                <Button
                  title="로그인"
                  style={styles.buttonLogin}
                  onPress={() => {
                      login(email, password);
                  }}
                />
            </View>

            <View style={styles.otherButtonContainer}>
                <Pressable
                    style={styles.otherButton}
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.otherText}>비밀번호 찾기</Text>
                </Pressable>
                <Text style={styles.otherText}>   |   </Text>
                <Pressable
                    style={styles.otherButton}
                    onPress={() => navigation.navigate('Terms')}
                >
                    <Text style={styles.otherText}>회원가입</Text>
                </Pressable>
            </View>
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
        display: 'flex',
        marginTop: 15
    }
})
export default Login;
