/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, TouchableOpacity,
} from 'react-native';

import Colors from '../Theme/Color';
import Text from '../components/Text'

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress()}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.button,
    paddingVertical: 18,
    borderRadius: 10,
  },
  title: {

  },
});
