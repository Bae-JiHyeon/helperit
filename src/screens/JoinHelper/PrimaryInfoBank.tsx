import React, {useState} from "react"
import {View, StyleSheet, Text, TextInput} from "react-native";
import {Center, CheckIcon, FormControl, NativeBaseProvider, Select, WarningOutlineIcon} from "native-base";
import BankList from "../../Components/BankList";
const PrimaryInfoBank = ()=>{
    const[accHolderName, setAccHolderName] = useState<string>('')
    const[accNo, setAccNo] = useState<number>()
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.item1}>
                    <Text style={styles.TopText}> 헬퍼의 신원 확인을 위해{'\n'}기본 정보를 입력해 주세요.</Text>
                </View>
                <View style={styles.item2}>
                    <Text style={styles.BoldText}>*예금주명</Text>
                        <TextInput style={styles.textInput}/>
                    <Text style={styles.BoldText}>*은행명</Text>
                        <BankList/>
                </View>
                <View style={styles.item3}>
                    <Text style={styles.BoldText}>*신분증 (본인 확인)</Text>
                    <Text></Text>
                </View>
                <View style={styles.item4}>
                    <Text style={styles.BoldText}>자격증</Text>
                </View>
            </View>
        </NativeBaseProvider>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFFFFF"
    },
    item1: {
        height:50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FFFFFF'
    },
    item2: {
        height: 170,
        backgroundColor: '#FFFFFF',


    },
    item3: {
        flex: 1,
        backgroundColor: '#4ebd7a',
    },
    item4:{
        flex:1,
        backgroundColor: '#e3a337'
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
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        width: 350,
        padding: 5,
        marginLeft: "5%"
    },
})
export default PrimaryInfoBank;
