import {View, Button} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/constants';

const SearchButton = ({title, onPress}) => {
  return (
    <View>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default SearchButton;
