import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../config';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "../types/navigation";

type AuthContextType = {
  register: (name: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType | undefined>(undefined);;

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({ });
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (name, email, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email: string, password: string) => {
    const userData = { email, password };
    const apiurl = 'http://10.0.2.2:8000/accounts/login/';

    const cleanedUserData = removeCircularReferences(userData);

    axios
      .post(apiurl, cleanedUserData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        console.log(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      })
      .catch((e) => {
        console.log(`login error ${e}`);
      });
    console.log(userData);
  };
  function removeCircularReferences(obj) {
    const seen = new WeakSet();

    function replacer(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return undefined;
        }
        seen.add(value);
      }
      return value;
    }

    return JSON.parse(JSON.stringify(obj, replacer));
  }

  const logout = ({ navigation }:NativeStackScreenProps<LoginStackParamList>) => {
    const apiurl = 'http://10.0.2.2:8000/accounts/logout/'
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.clear();

    {/*
      axios
        .post(
          apiurl,
          {},
          {
            headers: { Authorization: `Bearer ${userInfo.token}` }
          }
        )
        .then((res) => {
          console.log(res.data);
          AsyncStorage.removeItem("userInfo");
          setUserInfo({});
        })
        .catch(e => {
          AsyncStorage.removeItem("userInfo");
          AsyncStorage.clear();
          console.log(`logout error ${e}`);
        });
    */}
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
