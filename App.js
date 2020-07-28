/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  I18nManager,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from "lodash.memoize";

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  es: () => require("./src/translations/es.json"),
  en: () => require("./src/translations/en.json"),
  fr: () => require("./src/translations/fr.json")
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "es", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

class App extends React.Component {

  state = {
    input: ''
  }
  constructor(props) {
    super(props);
    setI18nConfig();
   
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  }

  changeValue = (text) => {
    this.setState({
      input: text
    })
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.text}>{translate("hello")}</Text>
          <TextInput style={styles.textInput} value={this.state.input} onChangeText={this.changeValue}/>
          <Text>{this.state.input}</Text>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  value: {
    fontSize: 18
  },
  textInput: {
    width: 300,
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default App;
