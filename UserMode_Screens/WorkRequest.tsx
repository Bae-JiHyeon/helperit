import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WorkRequest = () => {
  return (
    <View style={styles.container}>
      <Text>this is WorkRequest.tsx</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default WorkRequest;
