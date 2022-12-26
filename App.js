
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { WrapperAuth } from './Context/AuthWrapper';
import MainApp from './MainApp';






const App = () => {
  return (

    <>
      <NativeBaseProvider>
        <WrapperAuth>
          <MainApp />
        </WrapperAuth>
      </NativeBaseProvider>
    </>
  );
};

export default App;

