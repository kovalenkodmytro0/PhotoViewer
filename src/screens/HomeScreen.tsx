import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../App';

export type Props = NativeStackNavigationProp<AppStackParamList, 'Gallery'>;

const HomeScreen = () => {
  const navigation = useNavigation<Props>();
  return (
    <View>
      <Button
        title="Search Images"
        onPress={() => navigation.navigate('ImageGallery')}></Button>
    </View>
  );
};

export default HomeScreen;
