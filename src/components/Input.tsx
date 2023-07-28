import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/constants';

const Input = props => {
  const {placeholder} = props;
  return (
    <View>
      <TextInput {...props} autoCorrect={false} placeholder={placeholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
