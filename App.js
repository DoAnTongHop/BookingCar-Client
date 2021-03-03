import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3 }}>
        <Onboarding
          showNext={false}
          showSkip={false}
          showDone={false}
          bottomBarColor='#fff'
          subTitleStyles={{
            marginBottom: 200
          }}
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={require('./app/assets/illustration/illustration1.jpg')} style={{ width: 250, height: 200 }} />,
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('./app/assets/illustration/illustration2.jpg')} style={{ width: 250, height: 200 }} />,
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('./app/assets/illustration/illustration3.jpg')} style={{ width: 250, height: 200 }} />,
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
          ]}
        />
      </View>

      <View style={{ flex: 1, backgroundColor: '#fff' }}>

      </View>
    </View >
  )
};


export default App;
