import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HelperModeTab = () => {
  return (
    <View style={styles.container}>
      <Text>this is HelperMode.tsx</Text>
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
export default HelperModeTab;
