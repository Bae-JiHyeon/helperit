//로그인 화면
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    ScrollView,
    Pressable
} from 'react-native';
import {useContext, useState} from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from "../../types/navigation";
import { AuthContext } from "../../API/AuthContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = ({navigation}:NativeStackScreenProps<LoginStackParamList>) => {

    const [userID, setUserID] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({});
    const val = useContext(AuthContext);

    const login = (userID: string, password: string) => {
        setIsLoading(true);

        axios
          .post(`http://10.0.2.2:8000/user/api-auth/login/`, {
              userID,
              password,
          })
          .then(res => {
              let userInfo = res.data;
              console.log(userInfo);
              userInfo = removeCircularReferences(userInfo)
              setUserInfo(userInfo);
              AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
              setIsLoading(false);
          })
          .catch(e => {
              console.log(`login error ${e}`);
              setIsLoading(false);
          });
    };
    function removeCircularReferences(obj) {
        // obj를 처리하여 원형 참조를 제거하거나 변환하는 로직 추가
        // 예: obj에서 원형 참조를 찾아서 적절한 처리 수행
        // 원형 참조가 없으면 obj를 그대로 반환
        return obj;
    }

    console.log("User ID:", userID);
    console.log("Password:", password);
    return(
        <ScrollView style={styles.container}>
            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                <View style={styles.loginFormContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="아이디 입력"
                            maxLength={15}
                            autoCapitalize="none"
                            value={userID}
                            onChangeText={val =>setUserID(val)}
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
                <Pressable
                  style={styles.buttonLogin}
                  onPress={login}>
                    <Text>로그인</Text>
                </Pressable>
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
