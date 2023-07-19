//헬퍼 가입 시 나오는 모달 (동의하고 시작하기 누를시 팝업이 새로 뜨는건 구현X)
import React, {useState} from "react";
import {Alert, Modal, View, StyleSheet, Text, Pressable} from "react-native";
import {NativeBaseProvider, Checkbox, HStack} from "native-base";

const TermsModal = () =>{
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <NativeBaseProvider>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <HStack style={{marginBottom: 30}}>
                                <Text style={styles.modalText}>아래 내용 모두 동의</Text>
                                <Pressable
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={{marginLeft: 60, fontSize: 16, color: "black"}}>X</Text>
                                </Pressable>
                            </HStack>
                                <View style={styles.checkBoxContainer}>
                                    <Checkbox value="Privacy">개인정보</Checkbox>
                                    <Pressable>
                                        <Text style={styles.openViewText}>보기</Text>
                                    </Pressable>
                                </View>
                            <Pressable
                                style={styles.button}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>동의 하고 시작하기</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
        </NativeBaseProvider>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        padding: 10,
        elevation: 2,
    },
    closeButton: {
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#ffffff',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    checkBoxContainer:{
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
        marginTop: 10,
        marginBottom: 40
    },
    openViewText:{
        marginLeft: 60,
        fontSize: 16,
        textDecorationLine: "underline"

    }
});

export default TermsModal;
