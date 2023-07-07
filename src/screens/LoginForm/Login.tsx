import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    ScrollView,
    Pressable
} from 'react-native';
import{ useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from "../../types/navigation";

import Register from "./Register";
import Terms from "./Terms";
const Login = ({navigation}:NativeStackScreenProps<LoginStackParamList>) => {

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("onSignInPressed");
    };
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
                <Pressable onPress={onSignInPressed} style={styles.buttonLogin}>
                    <Text>로그인</Text>
                </Pressable>
            </View>

            <View style={styles.otherButtonContainer}>
                <Pressable
                    onPress={onSignInPressed}
                    style={styles.otherButton}>
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
        display: 'flex',
        marginTop: 15
    }
})
export default Login;
