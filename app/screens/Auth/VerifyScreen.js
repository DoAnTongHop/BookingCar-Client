import React, { useState, useEffect } from 'react'
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
import auth from '@react-native-firebase/auth';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Colors from '../../theme/Color';
import Button from '../../components/Button';

const CELL_COUNT = 6;

export default function VerifyScreen({ navigation, route }) {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [confirm, setConfirm] = useState(null);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        signInWithPhoneNumber(route?.params?.phoneNumber);
    }, [])

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    const handleBack = () => navigation.goBack();

    async function confirmCode() {
        try {
            const response = await confirm?.confirm(value);
            console.log('Go on');
            if (response) {
                navigation.navigate('Login');
            }
        } catch (error) {
            console.log('ERORR', error);
        }
    }

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
                {/* <Button title={t('keepGoing')} onPress={() => signInWithPhoneNumber('+84 769998692')} /> */}
                <Button title={t('keepGoing')} onPress={() => confirmCode()} />
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
        width: 40,
        height: 40,
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
