import React, { useState } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useTranslation } from 'react-i18next';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Colors from '../../theme/Color';
import Button from '../../components/Button';

const CELL_COUNT = 4;

export default function VerifyScreen({ navigation }) {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const handleBack = () => navigation.goBack();
    return (
        <Container style={styles.container}>
            <Header
                onPress={handleBack}
                colorImage='black'
            />
            <View
                style={styles.body}
            >
                <Text style={styles.welcome} >{t('titleVerify')}</Text>
                <Text style={styles.normalText} >{t('subTitleVerify')}</Text>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            key={index}
                            style={styles.borderText}>
                            <Text

                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>

                    )}
                />
                <View style={styles.footerContainer}>
                    <Text>{t('donthavecode')}</Text>
                    <Text style={styles.textResend}>{t('resend')}</Text>
                </View>
                <Button title={t('keepGoing')} onPress={() => alert('Going')} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    footerContainer: {
        marginTop: 60,
        marginBottom: 100,
        alignItems: 'center'
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    textResend: {
        marginTop: 5,
        color: Colors.purple,
        fontSize: 16,
        fontWeight: 'bold'
    },
    normalText: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 16,
        lineHeight: 30,
        color: Colors.gray,
    },
    body: {
        marginTop: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 20,
    },
    borderText: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: Colors.grayInput,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
    cell: {
        color: Colors.gray,
        lineHeight: 38,
        fontSize: 28,
    },
    focusCell: {
        borderColor: '#000',
    },
})
