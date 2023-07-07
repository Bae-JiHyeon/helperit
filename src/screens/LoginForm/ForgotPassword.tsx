import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput, Dimensions, ScrollView, Pressable, Button, Alert} from 'react-native';

const ForgotPassword = () =>{
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    const handleValidation = () => {
        // 이름과 아이디의 유효성을 검사하고 DB에서 정보와 일치하는지 확인하는 로직을 구현합니다.
        const isValidData = checkValidity(name, username);

        if (isValidData) {
            setIsValid(true);
        } else {
            setIsValid(false);
            Alert.alert('유효성 검사', '입력한 정보가 유효하지 않습니다.');
        }
    };

    const handleSetNewPassword = () => {
        // 새로운 비밀번호를 설정하는 로직을 구현합니다.
        // 비밀번호 설정이 성공적으로 완료되면 홈 화면 등으로 이동합니다.
        Alert.alert('비밀번호 설정', '새로운 비밀번호가 설정되었습니다.');
    };

    const checkValidity = (name: string, username: string): boolean => {
        // DB에서 이름과 아이디를 확인하여 유효성을 검사하는 로직을 구현합니다.
        // 예시: 미리 저장된 정보와 입력한 정보가 일치하는지 확인합니다.
        // 실제로는 서버와 통신하여 DB에서 정보를 확인해야 합니다.
        const storedName = '동현'; // DB에서 가져온 저장된 이름
        const storedUsername = 'ehdgus'; // DB에서 가져온 저장된 아이디

        if (name === storedName && username === storedUsername) {
            return true;
        } else {
            return false;
        }
    };

    if (isValid) {
        return (
            <View>
                <TextInput
                    placeholder="새로운 비밀번호"
                    secureTextEntry
                    style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                />
                <TextInput
                    placeholder="비밀번호 확인"
                    secureTextEntry
                    style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                />
                <Button title="비밀번호 설정" onPress={handleSetNewPassword} />
            </View>
        );
    }

    return (
        <View>
            <TextInput
                placeholder="이름"
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <TextInput
                placeholder="아이디"
                value={username}
                onChangeText={setUsername}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Button title="유효성 검사" onPress={handleValidation} />
        </View>
    );
};
export default ForgotPassword;
