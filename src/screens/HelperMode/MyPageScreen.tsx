import React from 'react'
import {View, StyleSheet, Text, Touchable, Pressable, Alert} from "react-native";
import {NativeBaseProvider,Avatar, HStack, VStack} from "native-base";
import MyHelperInfo from "../../Components/MyHelperInfo";

function MyPageScreen(){
    const onSignUpPressed = () => {
        console.warn("정산받기 동작");
    };
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <MyHelperInfo/>
                <View style={styles.menu}>
                    <View style={{alignItems:'center'}}>
                    <Text style={{
                        fontSize:18,
                        marginTop: '3%',
                        fontWeight: 'bold',
                        color:"#34BEBA",
                        }}>
                        총 수행 건수</Text>
                    </View>
                    <View style={styles.MenuTextContainer}>
                        <Pressable>
                            <Text style={styles.MenuText}>수행 내역</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.MenuText}>일거리 수행 방법</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.MenuText}>고객에게 온 후기</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.MenuText}>로그아웃</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.MenuText}>자주 묻는 질문</Text>
                        </Pressable>
                    </View>
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
    TextSize1: {
      fontSize:16,
      color:"#000000"
    },
    TextSize2: {
        fontSize:16,
        color:"#000000",
        marginTop: '60%',
    },
    MenuTextContainer: {
        height: 100,
        marginTop: '5%',
        marginLeft: '5%',
    },
    MenuText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#000000',
        lineHeight: 29.3,
        marginTop: '8%',
        fontWeight: 'bold',
    },
});
export default MyPageScreen;


