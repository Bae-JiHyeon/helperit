//헬퍼 전문분야, 이동 수단 선택
import React from "react";
import {Dimensions, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import BankList from "../../Components/BankList";
import {Checkbox, HStack, NativeBaseProvider, VStack} from "native-base";

const onSignInPressed = () => {
    console.warn("onSignInPressed");
};
const PrimaryInfoSpec=()=>{
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.item1}>
                    <Text style={styles.TopText}> 헬퍼의 신원 확인을 위해{'\n'}기본 정보를 입력해 주세요.</Text>
                </View>
                <View style={styles.item2}>
                    <Text style={styles.BoldText}>*전문분야</Text>
                    <VStack>
                        <Checkbox value="Cleaning" style={styles.checkBox}>청소</Checkbox>
                        <Checkbox value="Trash" style={styles.checkBox}>분리수거 대행</Checkbox>
                        <Checkbox value="Delivery" style={styles.checkBox}>배달</Checkbox>
                        <Checkbox value="Etc" style={styles.checkBox}>기타 전문직</Checkbox>
                        <Checkbox value="Online" style={styles.checkBox}>온라인(개발자, 마케팅, 디자인 등)</Checkbox>
                    </VStack>
                </View>
                <View style={styles.item3}>
                    <Text style={styles.BoldText}>*이동 수단</Text>
                    <HStack style={{padding: 10}}>
                        <Checkbox value="Cleaning" style={styles.checkBox}>자전거</Checkbox>
                        <Checkbox value="Trash" style={styles.checkBox}>킥보드</Checkbox>
                        <Checkbox value="Delivery" style={styles.checkBox}>오토바이</Checkbox>
                    </HStack>
                    <HStack style={{padding: 10}}>
                        <Checkbox value="Cleaning" style={styles.checkBox}>승용차</Checkbox>
                        <Checkbox value="Trash" style={styles.checkBox}>화물차</Checkbox>
                        <Checkbox value="Delivery" style={styles.checkBox}>도보</Checkbox>
                    </HStack>
                    <View style={styles.item4}>
                        <Pressable onPress={onSignInPressed} style={styles.buttonLogin}>
                            <Text>저장</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    item1: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FFFFFF'
    },
    item2: {
        height: 230,
        backgroundColor: '#FFFFFF',

    },
    item3: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    item4:{
        flex:1,
        alignItems:"center",
        backgroundColor: '#FFFFFF'
    },
    TopText:{
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
        color:"#000000"
    },
    BoldText:{
        fontSize:18,
        fontWeight: "bold",
        color:"#000000",
        marginTop: 10,
        marginLeft: "5%"
    },
    checkBox:{
        marginTop:15,
        marginLeft: 20
    },
    buttonLogin:{
        height: 40,
        backgroundColor: '#34BEBA',
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 20
    },
})
export default PrimaryInfoSpec;
