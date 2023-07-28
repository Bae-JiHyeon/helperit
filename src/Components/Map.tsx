//일거리 수행시 나오는 지도
//구글 플레이스토에 올릴때 SHA-1값을 Variant:release, Config:debug 값으로 변경해서 사용해야함 현재 Variant:debug, Config:debug
import React from "react"
import {View, StyleSheet, Text, ScrollView} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

const Map=()=>{
    return(
            <View style={styles.container}>
                <MapView style={styles.mapView} provider={PROVIDER_GOOGLE}
                         initialRegion={{
                             latitude: 35.1795543,
                             longitude: 129.0756416,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                             }}
                ></MapView>
                <View>
                    <Text>테스트</Text>
                </View>
            </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    mapView:{
        width: "100%",
        height: "35%"
    }
})
export default Map;
