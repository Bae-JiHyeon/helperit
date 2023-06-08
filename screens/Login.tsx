import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView, ScrollView
} from "react-native";
import React, { useState } from "react";

const Login = () => {
  return(
    <ScrollView style={styles.container}>
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <View style={styles.loginFormContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="아이디 입력"
              maxLength={15}
              keyboardType="email-address"/>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="비밀번호 입력"
              maxLength={21}
              keyboardType="email-address"/>
          </View>
        </View>
      </View>


      <TouchableOpacity style={styles.buttonLogin}>
         <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>

      <View style={styles.otherButtonContainer}>
        <TouchableOpacity style={styles.otherButton}>
          <Text style={styles.otherText}>비밀번호 찾기</Text>
        </TouchableOpacity>
        <Text style={styles.otherText}>   |   </Text>
        <TouchableOpacity style={styles.otherButton}>
          <Text style={styles.otherText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    padding: 20,
    flex: 1,
  },

  loginFormContainer:{
    width: Dimensions.get('window').width - 40,
  },

  inputContainer:{
    marginTop: 8,
    marginBottom: 16,
  },

  inputLabel: {
    fontWeight: '500',
    color: '#212121',
    fontSize: 16,
  },

  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 8,
    padding: 10,
    borderRadius: 100,
    minHeight: 40,
  },

  buttonLogin:{
    height: 40,
    backgroundColor: '#92b8b1',
    width: Dimensions.get('window').width - 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  buttonText:{
    fontSize: 18,
    color: '#ffffff'
  },

  otherText:{
    color: '#000000',
  },

  otherButton:{
    alignItems: 'center',
    justifyContent:'center'
  },

  otherButtonContainer:{
    justifyContent: 'center',
    flexDirection: 'row',

  }
})
export default Login;
