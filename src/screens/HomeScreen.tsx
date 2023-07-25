import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../App';

export type Props = NativeStackNavigationProp<AppStackParamList, 'Gallery'>;

const HomeScreen = () => {
  const navigation = useNavigation<Props>();
  return (
    <View>
      <Button
        title="Search Images"
        onPress={() => navigation.navigate('ImageGallery')}></Button>
      <Button
        title="Search Videos"
        onPress={() => navigation.navigate('VideoGallery')}></Button>
    </View>
  );
};

export default HomeScreen;
