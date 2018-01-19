import React from 'react';
import { View, Text, Image } from 'react-native';
import I18n, { getLanguages } from 'react-native-i18n';

// Enable fallbacks if you want `en-US`and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// Available languages
I18n.translations = {
  'en': require('./locales/en'),
  'fr': require('./locales/fr'),
};

const Header =() => {
    const {textStyle}= styles;
    return (
        <View>
            <Text style={textStyle}>Header1</Text>
            <Text>Header2</Text>
            <Text>{I18n.t('hello world')}</Text>
        </View>
    );
};

const styles={
    textStyle:{
        fontSize: 20,
        fontFamily: 'Arial',
    }
}

export default Header;