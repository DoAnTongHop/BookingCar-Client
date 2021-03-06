import React, { useState } from 'react';
import {
    StyleSheet, View, Image, Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Text from '../../components/Text';
import Colors from '../../theme/Color';
import FormField from '../../components/Form/FormField';
import TextInputField from '../../components/Form/TextInputField';
import ButtonSubmit from '../../components/Form/ButtonSubmit';
import ButtonSmall from '../../components/ButtonSmall';
import Container from '../../components/Container';

const { width } = Dimensions.get('screen');

export default function LoginScreen({ navigation }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const { t, i18n } = useTranslation();

    const LoginSchema = Yup.object().shape({
        phone: Yup.number().required(t('phoneRequired')).label(t('phone')),
        password: Yup.string().required(t('passwordRequired')).label(t('password')).min(6, t('passwordLength')).max(50, t('passwordLength'))
    })
    const handleMail = () => alert('handleMail');
    const handleFacebook = () => alert('handleFacebook');
    return (
        <Container style={styles.container}>
            <Header
            // onPress={handleBack}
            // colorImage='black'
            />
            <View style={styles.body}>
                <Text style={styles.welcome} >{t('welcomelogin')}</Text>
                <Text style={styles.normalText} >{t('subTextLogin')}
                    <Text
                        style={styles.textSignIn}
                        onPress={() => navigation.navigate('Register')}>
                        {t('signup')}
                    </Text>
                </Text>

                <View >
                    <FormField
                        initialValues={{ phone: '', password: '' }}
                        onSubmit={(value) => alert(`${value.phone}++${value.password}`)}
                        validationSchema={LoginSchema}
                    >
                        <TextInputField
                            autoCapitalize='none'
                            autoFocus
                            // styleTitle={styles.textSubTitle}
                            name='phone'
                            keyboardType='numeric'
                            title={t('phone')}
                        />
                        <TextInputField
                            autoCapitalize='none'
                            isPassword
                            // styleTitle={styles.textSubTitle}
                            name='password'
                            title={t('password')}
                        />

                        <CheckBox
                            style={styles.checkbox}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <View style={styles.containerButton}>
                            <ButtonSubmit
                                title={t('buttonLogin')}
                                style={styles.button}
                            />
                        </View>
                    </FormField>
                    <View style={styles.otherButton}>
                        <ButtonSmall
                            style={styles.buttonOtherEmail}
                            styleTitle={styles.otherButtonTitle}
                            title='Gmail'
                            onPress={handleMail}
                        >
                            <Image source={require('../../assets/icons/gmail.png')} style={styles.imageOtherButton} />
                        </ButtonSmall>

                        <ButtonSmall
                            style={styles.buttonOtherFacebook}
                            styleTitle={styles.otherButtonTitle}
                            title='Facebook'
                            onPress={handleFacebook}
                        >
                            <Image source={require('../../assets/icons/facebook.png')} style={styles.imageOtherButton} />
                        </ButtonSmall>
                    </View>
                </View>
            </View>
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
    checkbox: {
        marginTop: 20,
    },
    otherButton: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonOtherEmail: {
        width: width * 0.4,
        backgroundColor: Colors.gmail,
    },
    buttonOtherFacebook: {
        width: width * 0.4,
        backgroundColor: Colors.facebook,
    },
    otherButtonTitle: {
        marginLeft: 5,
        color: Colors.primary,
    },
    imageOtherButton: {
        width: 20,
        height: 20,
    },
});
