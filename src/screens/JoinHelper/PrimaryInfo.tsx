//헬퍼 가입시 기본 정보입력 (이름 주소) useState 구현 X
import React from "react"
import {View, StyleSheet, Text, TextInput, Pressable} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {JoinHelperStackParamList} from "../../types/navigation";
import PrimaryInfoBank from "./PrimaryInfoBank";

const PrimaryInfo = ({navigation}:NativeStackScreenProps<JoinHelperStackParamList>)=>{
    return(
            <View style={styles.container}>
                <View style={styles.item1}>
                    <Text style={styles.TopText}> 헬퍼의 신원 확인을 위해{'\n'}기본 정보를 입력해 주세요.</Text>
                </View>
                <View style={styles.item2}>
                    <Text style={styles.BoldText}>*이름</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.BoldText}>*주소</Text>
                    <TextInput style={styles.textInput}/>
                </View>
                <View style={styles.item3}>
                    <Text style={styles.BoldText}>*신분증 (본인 확인)</Text>
                    <Text></Text>
                </View>
                <View style={styles.item4}>
                    <Text style={styles.BoldText}>자격증</Text>
                </View>
                <View style={{height:65}}>
                    <View style={styles.naviBar}>
                        <Pressable>
                            <Text style={{fontSize:25,}}>{"<"}</Text>
                        </Pressable>
                        <View style={styles.circle}/>
                        <View style={styles.grayCircle}/>
                        <View style={styles.grayCircle}/>
                        <Pressable onPress={()=>navigation.navigate('PrimaryInfoBank')}>
                            <Text style={{fontSize:25,}}>{">"}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
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
        backgroundColor: '#ffffff',
    },
    item4:{
        flex:1,
        backgroundColor: '#ffffff'
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
    circle: {
        width: 20,
        height: 20,
        borderRadius: 100 / 2,
        backgroundColor: "#0066ff",
        marginLeft: "5%",
        marginEnd: "5%"
    },
    grayCircle: {
        width: 20,
        height: 20,
        borderRadius: 100 / 2,
        backgroundColor: "#cbcbcb",
        marginLeft: "5%",
        marginEnd: "5%"
    },
    naviBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        padding:"5%",
        backgroundColor:"#FFFFFF"
    },
})
export default PrimaryInfo;
