import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './navigation/RootStack';

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
