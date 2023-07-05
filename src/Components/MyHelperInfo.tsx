import React from 'react'
import {View, StyleSheet, Text, Touchable, Pressable, Alert} from "react-native";
import {NativeBaseProvider,Avatar, HStack, VStack} from "native-base";

//*단독으로 쓰면 이상하게 나옴 반드시 뷰 비율 flex1 : 4비율로 쓸때만 정상적으로 출력
//*단독으로 쓰면 이상하게 나옴 반드시 뷰 비율 flex1 : 4비율로 쓸때만 정상적으로 출력
//*단독으로 쓰면 이상하게 나옴 반드시 뷰 비율 flex1 : 4비율로 쓸때만 정상적으로 출력
//*단독으로 쓰면 이상하게 나옴 반드시 뷰 비율 flex1 : 4비율로 쓸때만 정상적으로 출력
//*단독으로 쓰면 이상하게 나옴 반드시 뷰 비율 flex1 : 4비율로 쓸때만 정상적으로 출력
function MyHelperInfo(){
    const onSignUpPressed = () => {
        console.warn("정산받기 동작");
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
                            <Pressable onPress={onSignUpPressed}>
                                <Text style={styles.TextSize2}>정산받기></Text>
                            </Pressable>
                        </VStack>
                    </View>
                </View>
                <View style={{borderBottomColor: 'gray', borderBottomWidth: 2,}}/>
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

});
export default MyHelperInfo;


