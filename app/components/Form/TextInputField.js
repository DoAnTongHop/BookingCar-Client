import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Animated } from 'react-native';
import { useFormikContext, useFormik } from 'formik';

import Text from '../Text';
import ErrorMessage from './ErrorMessage';
import Colors from '../../theme/Color';

export default function TextInputField({
  name, style, title, styleTitle, lengthValue, ...otherProps
}) {

  const [isFocus, setIsFocus] = useState(false);

  const {
    handleChange, errors, setFieldTouched, touched, values
  } = useFormikContext();

  const handleBlur = () => {
    if (values[name].length > 0) return;
    setIsFocus(false)
  };

  const handleFocus = () => setIsFocus(true);

  const titleStyle = {
    marginLeft: 5,
    color: Colors.grayInput,
    position: 'absolute',
    left: 6,
    top: !isFocus ? 14 : 2,
    fontSize: !isFocus ? 20 : 14,
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={titleStyle} >{title}</Text>
        <TextInput
          {...otherProps}
          onBlur={() => {
            setFieldTouched(name)
            handleBlur()
          }}
          onFocus={() => handleFocus()}
          style={styles.text}
          onChangeText={handleChange(name)} />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    borderRadius: 10,
    borderColor: Colors.grayInput,
    borderWidth: 1,
  },
  text: {
    marginTop: 8,
    marginLeft: 5
  }
});
