import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';

const RequestPage = () => {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>this is RequestPage.</Text>
      </Box>
    </NativeBaseProvider>
  );
};

export default RequestPage;
