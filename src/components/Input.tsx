import {View, TextInput, TextInputProps} from 'react-native';
import React from 'react';

const Input = (props: TextInputProps) => {
  return (
    <View>
      <TextInput {...props} autoCorrect={false} />
    </View>
  );
};

export default Input;
