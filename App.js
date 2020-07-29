/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Suspense } from 'react';




import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import HomeScreen from './src/components/HomeScreen';

import i18n from './src/modules/i18n';


const App = () => {


 

  const onChangeLanguage = async (lng) => {
    i18n.changeLanguage(lng);
    try {
      await AsyncStorage.setItem('@APP:languageCode', lang);
    } catch (error) {
      console.log(` Ocurrió un error : ${error}`);
    }
    console.log(i18n.dir());
  }

  return (
    <Suspense fallback={<Text>Loading ... </Text>}>
      <SafeAreaView style={styles.safeArea}>
        <HomeScreen onChangeLanguage={onChangeLanguage}/>
      </SafeAreaView>
    </Suspense>
  );

};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default App;
