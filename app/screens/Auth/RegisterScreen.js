import React from 'react'
import {
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header';
import Text from '../../components/Text';
import Colors from '../../theme/Color';
import FormField from '../../components/Form/FormField';
import TextInputField from '../../components/Form/TextInputField';
import ButtonSubmit from '../../components/Form/ButtonSubmit';
import Container from '../../components/Container';


export default function RegisterScreen({ navigation }) {
    const { t } = useTranslation();

    const RegisterSchema = Yup.object().shape({
        phone: Yup.number().required(t('phoneRequired')).label(t('phone')),
        password: Yup.string().required(t('passwordRequired')).label(t('password')).min(6, t('passwordLength')).max(50, t('passwordLength')),
        username: Yup.string().required(t('passwordRequired')).label(t('username')).min(1, t('usernameLength')).max(50, t('usernameLength')),
        email: Yup.string().email(t('isEmail')).required(t('emailRequired')).label(t('email')),
    })
    const handleBack = () => navigation.goBack();

    function handleButtonCreateAccount(phoneNumber) {
        navigation.navigate('Verify', { phoneNumber })
    }


    return (
        <Container style={styles.container}>
            <KeyboardAvoidingView
                behavior="position"
                style={styles.body}
            >
                <Header
                    onPress={handleBack}
                    colorImage='black'
                />
                <View
                    style={styles.body}
                >
                    <Text style={styles.welcome} >{t('welcome-register')}</Text>
                    <Text style={styles.normalText} >{t('subTextRegister')}
                        <Text
                            style={styles.textSignIn}
                            onPress={() => navigation.navigate('Login')}>{t('signin')}
                        </Text>
                    </Text>

                    <View style={styles.input}>
                        <FormField
                            initialValues={{ phone: '', username: '', email: '', password: '' }}
                            onSubmit={(value) => handleButtonCreateAccount('+84 ' + value.phone)}
                            validationSchema={RegisterSchema}
                        >
                            <TextInputField
                                autoCapitalize='none'
                                // styleTitle={styles.textSubTitle}
                                keyboardType='numeric'
                                name='phone'
                                title={t('phone')}
                            />
                            <TextInputField
                                autoCapitalize='none'
                                secureTextEntry
                                // styleTitle={styles.textSubTitle}
                                name='password'
                                title={t('password')}
                            />
                            <TextInputField
                                autoCapitalize='none'
                                // styleTitle={styles.textSubTitle}
                                name='username'
                                title={t('username')}
                            />
                            <TextInputField
                                autoCapitalize='none'
                                // styleTitle={styles.textSubTitle}
                                name='email'
                                title={t('email')}
                            />


                            <View style={styles.containerButton}>
                                <ButtonSubmit
                                    title={t('buttonRegister')}
                                    style={styles.button}
                                />
                            </View>
                        </FormField>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: Colors.primary,
    },
    containerButton: {
        marginTop: 30,
    },
    body: {
        marginTop: 20,
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    normalText: {
        marginTop: 10,
        fontSize: 16,
        lineHeight: 30,
        color: Colors.gray,
    },
    textSignIn: {
        color: Colors.purple,
        fontSize: 16,
    },
    input: {

    },

})
