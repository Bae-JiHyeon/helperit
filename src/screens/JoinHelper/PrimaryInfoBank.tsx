import React, {useState} from "react"
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { HStack, NativeBaseProvider,} from "native-base";
import BankList from "../../Components/BankList";
const PrimaryInfoBank = ()=>{
    const[accHolderName, setAccHolderName] = useState<string>('')
    const[accNo, setAccNo] = useState<number>()
    return(
            <NativeBaseProvider>
                <KeyboardAvoidingView behavior={Platform.OS === "android" ? 'padding' : 'height'}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={styles.container}>
                            <View style={styles.item1}>
                                <Text style={styles.TopText}> 헬퍼의 신원 확인을 위해{'\n'}기본 정보를 입력해 주세요.</Text>
                            </View>
                            <View style={styles.item2}>
                                <Text style={styles.BoldText}>*예금주명</Text>
                                <TextInput style={styles.textInput}/>
                                <Text style={styles.BoldText}>*은행명</Text>
                                <BankList/>
                                <Text style={styles.BoldText}>*계좌 번호</Text>
                                <Text style={styles.SubText}>*본인 명의의 계좌번호만 가능합니다.</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder={"-없이 숫자만 입력 해주세요"}
                                    keyboardType={"number-pad"}/>
                                <Text style={styles.BoldText}>*주민등록번호</Text>
                                <Text style={styles.SubText}>*잘못 입력시 수익금이 정산되지 않습니다.</Text>
                                <HStack>
                                    <TextInput style={styles.NumInput} keyboardType={"number-pad"}/>
                                    <Text style={{fontSize:30}}>  -</Text>
                                    <TextInput style={styles.NumInput} keyboardType={"number-pad"}/>
                                </HStack>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
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
    SubText:{
        marginTop:5,
        marginLeft:"5%",
        marginBottom:"10%",
        color:"black"
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        width: 350,
        padding: 5,
        marginLeft: "5%"
    },
    NumInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        width: 130,
        padding: 5,
        marginLeft: "5%"
    },
})
export default PrimaryInfoBank;
