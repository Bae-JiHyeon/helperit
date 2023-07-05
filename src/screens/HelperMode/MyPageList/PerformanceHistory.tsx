import {Avatar, Box, FlatList, Heading, HStack, NativeBaseProvider, Spacer, Text, VStack} from "native-base";
import React from "react";
import { View, StyleSheet} from "react-native";

import MyHelperInfo from "../../../Components/MyHelperInfo";
const PerformanceHistory=()=>{
    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            fullName: 'Aafreen Khan',
            timeStamp: '',
            recentText: 'Good Day!',
            avatarUrl: '',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            fullName: 'Sujitha Mathur',
            timeStamp: '',
            recentText: 'Cheer up, there!',
            avatarUrl: '',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            fullName: 'Anci Barroco',
            timeStamp: '',
            recentText: 'Good Day!',
            avatarUrl: '',
        },
        {
            id: '68694a0f-3da1-431f-bd56-142371e29d72',
            fullName: 'Aniket Kumar',
            timeStamp: '',
            recentText: 'All the best',
            avatarUrl: '',
        },
    ];
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <MyHelperInfo/>
                <View style={styles.menu}>
                        <Heading fontSize="xl" p="6" pb="3">
                            수행 내역
                        </Heading>
                    <FlatList
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        data={data}
                        renderItem={({item}) => (
                            <Box
                                _dark={{borderColor: 'muted.50'}}
                                borderColor="muted.800"
                                pl={['0', '4']}
                                pr={['0', '5']}
                                py="2">
                                <HStack space={[2, 3]} justifyContent="space-between">
                                    <Box paddingLeft={5}>
                                        <Avatar
                                            rounded={10}
                                            size="48px"
                                            source={{uri: item.avatarUrl}}
                                        />
                                    </Box>
                                    <VStack>
                                        <Text _dark={{color: 'warmGray.50'}} color="coolGray.800" bold>
                                            {item.fullName}
                                        </Text>
                                        <Text color="coolGray.600" _dark={{color: 'warmGray.200'}}>
                                            {item.recentText}
                                        </Text>
                                    </VStack>
                                    <Spacer />
                                    <Text
                                        fontSize="xs"
                                        _dark={{color: 'warmGray.50'}}
                                        color="coolGray.800"
                                        alignSelf="flex-start">
                                        {item.timeStamp}
                                    </Text>
                                </HStack>
                            </Box>
                        )}
                        keyExtractor={item => item.id}/>
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
        flex:4,
        backgroundColor: 'white',
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
    },
});
export default PerformanceHistory;

