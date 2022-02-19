import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Home!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
