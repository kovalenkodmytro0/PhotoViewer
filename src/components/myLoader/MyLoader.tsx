import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../styles/colors';

const MyLoader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={COLORS.brightBlue} />
  </View>
);

export default MyLoader;
