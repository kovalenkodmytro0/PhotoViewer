import {View, Button} from 'react-native';
import React from 'react';

interface SearchButtonProps {
  title: string;
  onPress: () => void;
}

const SearchButton = ({title, onPress}: SearchButtonProps) => {
  return (
    <View>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default SearchButton;
