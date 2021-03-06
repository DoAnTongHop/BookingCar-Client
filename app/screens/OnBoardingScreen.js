import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useTranslation } from 'react-i18next';

import ButtonSmall from '../components/ButtonSmall';
import Container from '../components/Container';
import Colors from '../theme/Color';
import Text from '../components/Text';

const { width, height } = Dimensions.get('screen')

export default function OnBoardingScreen({ navigation }) {
    const { t, i18n } = useTranslation();

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    handleRegister
    return (
        <Container style={styles.container}>
            <View style={styles.onboarding}>
                <Onboarding
                    showNext={false}
                    showSkip={false}
                    showDone={false}
                    bottomBarColor='#fff'
                    subTitleStyles={{
                        marginBottom: height * 0.2,
                        marginHorizontal: 20
                    }}
                    pages={[
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/illustration/illustration2.jpg')} style={{ width: 250, height: 200 }} />,
                            title: t('quality'),
                            subtitle: t('contentQuality'),
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/illustration/illustration1.jpg')} style={{ width: 250, height: 200 }} />,
                            title: t('everywhere'),
                            subtitle: t('contentEverywhere'),
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/illustration/illustration3.jpg')} style={{ width: 250, height: 200 }} />,
                            title: t('bookQuickly'),
                            subtitle: t('contentbookQuickly'),
                        },
                    ]}
                />
            </View>
            <View style={styles.containerButton}>
                <View style={styles.flexButton}>
                    <ButtonSmall title={t('buttonLoginOnBoard')} style={styles.button} styleTitle={styles.titleButton} onPress={() => handleLogin()} />
                    <ButtonSmall title={t('buttonRegisterOnBoard')} style={styles.button} styleTitle={styles.titleButton} onPress={() => handleRegister()} />
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    containerButton: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        width: width * 0.4,
        backgroundColor: Colors.button,
    },
    titleButton: {
        fontWeight: 'bold',
    },
    flexButton: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    onboarding: {
        flex: 3,
    },
})
