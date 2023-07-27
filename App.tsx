import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ImageGalleryScreen from './src/screens/ImageGalleryScreen';

export type AppStackParamList = {
  Gallery: undefined;
  ImageGallery: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={HomeScreen} />
        <Stack.Screen name="ImageGallery" component={ImageGalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
