import React from 'react';
import {
  Alert,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import BlockButton from './BlockButton';
import TextInputBlock from './TextInputBlock';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

const testAlert = () => {
  ReactNativeHapticFeedback.trigger('impactLight', options);
  Alert.alert('가입 버튼 누름', '가입 버튼을 눌렀습니다', [
    {
      text: '맞아요',
      onPress: () => console.log('OK'),
    },
  ]);
};

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/img/bg_app.png')}
      style={styles.bgImage}>
      <SafeAreaView style={styles.mainView}>
        <View style={styles.headerView} />
        <View style={styles.contentView}>
          <Text style={styles.appName}>한줄로</Text>
          <View style={styles.loginView}>
            <TextInputBlock
              width="80%"
              height="30%"
              color="rgba(82, 99, 138, 0.3)"
            />
            <TextInputBlock
              width="80%"
              height="30%"
              color="rgba(82, 99, 138, 0.3)"
            />
            <BlockButton
              width="60%"
              color="rgba(220, 230, 246, 0.3)"
              text="로그인"
              fontSize="25"
              onPress={testAlert}
            />
          </View>
          <View style={styles.accountMenuView}>
            <BlockButton
              width="60%"
              color="rgba(220, 230, 246, 0.3)"
              text="한줄로 가입하기"
              fontSize="25"
              onPress={testAlert}
            />
          </View>
        </View>
        <View style={styles.footerView}></View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  headerView: {
    flex: 1,
    justifyContent: 'center',
  },
  contentView: {
    flex: 8,
    justifyContent: 'space-between',
  },
  appName: {
    height: '15%',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'NanumNeuRisNeuRisCe' : 'Nanum_Neuris',
    fontSize: 80,
    marginTop: 70,
    color: 'white',
  },
  loginView: {
    height: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountMenuView: {
    flex: 3,
    alignItems: 'center',
  },
  footerView: {
    flex: 1,
    justifyContent: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;
