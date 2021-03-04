/* eslint-disable no-use-before-define */
/* eslint-disable indent */
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Text from "../components/Text";

export default function ButtonSmall({
    title,
    onPress,
    style,
    styleTitle,
    children,
}) {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={() => onPress()}
        >
            <>
                {children}
                <Text style={[styles.title, styleTitle]}>{title}</Text>
            </>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 18,
        borderRadius: 10,
    },
    title: {

    },
});
