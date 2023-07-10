import React from "react"
import {View, StyleSheet, Text, TextInput} from "react-native";

const PrimaryInfo = ()=>{
    return(
        <View style={styles.container} >
            <Text style={styles.TopText}> 헬퍼의 신원 확인을 위해{'\n'}기본 정보를 입력해 주세요.</Text>
            <View style={styles.item1}>
            </View>
            <View style={styles.item2}>

            </View>
            <View style={styles.item3}>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifycontent:"center",
        backgroundColor: "#FFFFFF"
    },

    item1: {
        flex: 1,
        backgroundColor: '#e93e43'
    },
    item2: {
        flex: 1,
        backgroundColor: '#f5a941'
    },
    item3: {
        flex: 1,
        backgroundColor: '#4ebd7a'
    },
    TopText:{
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
        color:"#000000"
    },
    BoldText:{
        fontSize:18,
        fontWeight: "bold"
    }
})
export default PrimaryInfo;
