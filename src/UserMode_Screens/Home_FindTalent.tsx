import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    StatusBar,
} from 'react-native';
import {Text, Avatar, Box, Heading, HStack, Spacer, VStack} from 'native-base';

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

const Home_FindTalent = () => {
    return (
        <Box>
            <HStack>
                <Heading fontSize="xl" p="4" pb="3">
                    헬퍼 재능 찾기
                </Heading>
                <Spacer />
                <Box paddingRight={7} justifyContent={'center'}>
                    <Text>전체보기 {'>'}</Text>
                </Box>
            </HStack>
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
                keyExtractor={item => item.id}
            />
        </Box>
    );
};

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: 'gray',
    },
});
export default Home_FindTalent;
