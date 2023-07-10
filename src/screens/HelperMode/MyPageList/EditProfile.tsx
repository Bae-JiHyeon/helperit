//헬퍼 마이페이지 정보 수정페이지 (TextInput onChange, useEffect 기능 구현 남음, )
import React, {useState} from 'react'
import {View, StyleSheet, Text, Touchable, Pressable, Alert, TextInput} from "react-native";
import {NativeBaseProvider,Avatar, HStack, VStack} from "native-base";

const EditProfile=()=>{
    const [showIntroTextArea, setShowIntroTextArea] = useState(false);
    const [showCareerTextArea, setShowCareerTextArea] = useState(false);
    const [showPossibleAreatextArea, setShowPossibleAreaTextAreaValue] = useState(false);
    const introHandleClick = () => {
        setShowIntroTextArea(!showIntroTextArea);
    };

    const careerHandleClick=()=>{
        setShowCareerTextArea(!showCareerTextArea);
    };

    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.item1} >
                        <Avatar bg="green.500" size="xl"></Avatar>
                    </View>
                    <View style={styles.item2} >
                        <VStack>
                            <Text style={{fontWeight:'bold',fontSize:16, color:"#000000",}}>이름 넣는곳</Text>
                            <Text style={styles.TextSize1}>헬퍼 정보1</Text>
                            <Text style={styles.TextSize1}>헬퍼 정보2</Text>
                        </VStack>
                    </View>
                    <View style={styles.item3} >
                        <VStack>
                            <Text style={{fontSize:16, color:"#34BEBA", marginTop: '20%',}}>인증헬퍼</Text>
                        </VStack>
                    </View>
                </View>
                <View style={{borderBottomColor: 'gray', borderBottomWidth: 2,}}/>
            </View>
            <View style={styles.menu}>
                <View style={styles.MenuTextContainer}>
                    <Pressable onPress={introHandleClick}>
                        {({ pressed }) =>(
                            <View style={{opacity: pressed ? 0.5 : 1,}}>
                                <Text style={styles.MenuText}>자기 소개{'>'}</Text>
                            </View>
                        )}
                    </Pressable>
                    {showIntroTextArea && <TextInput style={styles.textInput}/>}
                    <Pressable onPress={careerHandleClick}>
                        {({ pressed }) =>(
                            <View style={{opacity: pressed ? 0.5 : 1,}}>
                                <Text style={styles.MenuText}>경력{'>'}</Text>
                            </View>
                        )}
                    </Pressable>
                    {showCareerTextArea && <TextInput style={styles.textInput}/>}
                    <Pressable>
                        <Text style={styles.MenuText}>수행 가능 지역{'>'}</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.MenuText}>로그아웃</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.MenuText}>회원 탈퇴</Text>
                    </Pressable>
                </View>
            </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        //height: 120,
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        flexDirection: "row"
    },
    menu: {
        flex:4,
        backgroundColor: 'white',

    },
    TextSize1: {
        fontSize:16,
        color:"#000000"
    },
    item1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item2: {
        flex: 1,
        justifyContent: 'center'
    },
    item3: {
        flex: 1,
        alignItems: 'center',
    },
    MenuTextContainer: {
        height: 100,
        marginTop: '5%',
        marginLeft: '5%',
    },
    MenuText: {
        fontSize: 25,
        color: '#000000',
        lineHeight: 29.3,
        marginTop: '8%',
        fontWeight: 'bold',
    },
    textInput: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 4,
        width: 350,
    },

});
export default EditProfile;
