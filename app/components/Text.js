/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../theme/Color';

export default function AppText({ style, children, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.black,
  },
});
