//은행 리스트 (기능 구현 X)
import {Select} from "native-base";
import React from "react";

const BankList = () =>{
    return(
        <Select width="350" marginLeft={5} color="black" >
            <Select.Item label="KDB산업은행" value="KDB" />
            <Select.Item label="IBK기업은행" value="IBK" />
            <Select.Item label="한국수출입은행" value="ExImBank" />
            <Select.Item label="수협은행" value="SUHYUP" />
            <Select.Item label="NH농협은행" value="NONGHYUP" />
            <Select.Item label="KB국민은행" value="KB" />
            <Select.Item label="우리은행" value="WOORI" />
            <Select.Item label="SC제일은행" value="SC" />
            <Select.Item label="한국씨티은행" value="CITY" />
            <Select.Item label="하나은행" value="HANA" />
            <Select.Item label="신한은행" value="SHINHAN" />
            <Select.Item label="대구은행" value="DAEGU" />
            <Select.Item label="부산은행" value="BUSAN" />
            <Select.Item label="광주은행" value="KWANGJU" />
            <Select.Item label="제주은행" value="JEJU" />
            <Select.Item label="전북은행" value="JEONBUK" />
            <Select.Item label="경남은행" value="KYONGNAM" />
            <Select.Item label="케이뱅크" value="KBANK" />
            <Select.Item label="카카오뱅크" value="KAKAO" />
            <Select.Item label="토스뱅크" value="TOSS" />
        </Select>
    );
}
export default BankList;
