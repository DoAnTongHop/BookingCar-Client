import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import ButtonSmall from '../components/ButtonSmall';
import Colors from '../theme/Color';

const { width, height } = Dimensions.get('screen')

export default function OnBoardingScreen() {
    return (
        <View style={styles.container}>
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
                            title: 'Quality',
                            subtitle: 'Vehicle quality is at its best and comfortable for guests',
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/illustration/illustration1.jpg')} style={{ width: 250, height: 200 }} />,
                            title: 'Everywhere',
                            subtitle: 'Appears in all provinces of the country',
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/illustration/illustration3.jpg')} style={{ width: 250, height: 200 }} />,
                            title: 'Book quickly',
                            subtitle: 'The process of buying tickets is fast and convenient for customers',
                        },
                    ]}
                />
            </View>
            <View style={styles.containerButton}>
                <View style={styles.flexButton}>
                    <ButtonSmall title='Login' style={styles.button} styleTitle={styles.titleButton} />
                    <ButtonSmall title='Register' style={styles.button} styleTitle={styles.titleButton} />
                </View>
            </View>
        </View>
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
        fontWeight: 'bold'
    },
    flexButton: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    onboarding: {
        flex: 3
    },
})
