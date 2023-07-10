import React from "react"
import {View, StyleSheet, } from "react-native";
import {Box, Heading, NativeBaseProvider, Text} from "native-base";

import MyHelperInfo from "../../../Components/MyHelperInfo";

const CustomerReview=()=>{
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <MyHelperInfo/>
                <View style={styles.menu}>
                    <Heading fontSize="xl" p="6" pb="3">
                        고객에게서 온 후기
                    </Heading>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Box width={300} height={70} bg="primary.400" rounded="xl" marginTop={10} marginBottom={10} alignItems={"center"} justifyContent="center">
                            <Text>박스 안 텍스트</Text>
                        </Box>
                        <Box width={300} height={70} bg="primary.400" rounded="xl" marginBottom={10}  alignItems={"center"} justifyContent="center">
                            <Text>박스 안 텍스트</Text>
                        </Box>
                        <Box width={300} height={70} bg="primary.400" rounded="xl" marginBottom={10} alignItems={"center"} justifyContent="center">
                            <Text>박스 안 텍스트</Text>
                        </Box>
                        <Box width={300} height={70} bg="primary.400" rounded="xl" marginBottom={10} alignItems={"center"} justifyContent="center">
                            <Text>박스 안 텍스트</Text>
                        </Box>
                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    );
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        //height: 120,
        backgroundColor: 'white',
    },
    menu: {
        flex: 4,
        backgroundColor: 'white',
    },
    textstyle: {
        marginTop:"8%",
        marginLeft:"7%",
        fontSize:20,
        fontWeight:"bold",
        color: "#000000"
    },
    boxcontainer:{
        alignItems:"center",
        justifyContent:"center"
    }
})
export default CustomerReview;
