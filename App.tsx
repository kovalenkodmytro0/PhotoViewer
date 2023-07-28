import React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import {View} from 'react-native';

function App(): JSX.Element {
  return (
    <View>
      <HomeScreen />
    </View>
  );
}

export default App;
