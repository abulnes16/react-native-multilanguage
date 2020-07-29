import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


import {withTranslation } from 'react-i18next';

function HomeScreen({ onChangeLanguage, t }) {

    return (
        <View>
            <Text style={styles.text}>{t('hello')}</Text>
            <TouchableOpacity style={styles.button} onPress={() => onChangeLanguage('es')} >
                <Text>{t('toggleSpanish')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onChangeLanguage('en')} >
                <Text>{t('toggleEnglish')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onChangeLanguage('fr')} >
                <Text>{t('toggleFrench')}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default withTranslation()(HomeScreen);


const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        fontSize: 18
    },
})