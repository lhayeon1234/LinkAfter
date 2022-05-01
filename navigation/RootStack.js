import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import React from 'react';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
