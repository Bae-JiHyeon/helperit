//일거리 수행시 나오는 지도
//구글 플레이스토에 올릴때 SHA-1값을 Variant:release, Config:debug 값으로 변경해서 사용해야함 현재 Variant:debug, Config:debug
import React from "react"
import { View, StyleSheet, Text} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

const Map=()=>{
    return(
        <View style={styles.container}>
            <Text>테스트</Text>
            <MapView style={styles.mapView} provider={PROVIDER_GOOGLE}
                     initialRegion={{
                         latitude: 37.78825,
                         longitude: -122.4324,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}></MapView>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    mapView:{
        width:300,
        height:400,
    }
})
export default Map;
