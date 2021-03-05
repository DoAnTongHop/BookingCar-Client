import React, { Children } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function Container({ style, children }) {
    return (
        <SafeAreaView style={style}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
