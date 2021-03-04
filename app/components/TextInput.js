import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Colors from '../theme/Color';
import Text from './Text';

export default function AppTextInput({ title, style, ...otherProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle} >{title}</Text>
      <View style={[styles.containerInput, style]}>
        <TextInput style={styles.textInput} {...otherProps} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  containerInput: {
    borderRadius: 10,
    borderColor: Colors.grayInput,
    borderWidth: 1,
  },
  textTitle: {
    marginBottom: 10,
    color: Colors.grayInput,
    fontSize: 20,
  },
  textInput: {
    paddingHorizontal: 15,
    fontSize: 18,
  },
});
