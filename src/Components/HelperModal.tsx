import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

const PopupModal = ({ isVisible, onClose }) => {
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text>This is a popup!</Text>
          <Button title="확인" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default PopupModal;
