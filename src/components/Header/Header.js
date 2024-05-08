import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import i18n from '../../config/i18n';

const Header = ({ language, toggleLanguage }) => {
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return i18n.t('goodMorning');
    } else if (hour < 18) {
      return i18n.t('goodAfternoon');
    } else if (hour < 22) {
      return i18n.t('goodEvening');
    } else {
      return i18n.t('goodNight');
    }
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.greetingText}>{getTimeGreeting()}</Text>
      <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage}>
        <Text style={styles.languageText}>{language.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#0000FF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 120,
    elevation: 5,

  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'RobotoSlab-Medium',
    padding: 10,
    
  },
  languageButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#DC143C',
    elevation: 5,
    marginTop: 10,

  },
  languageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Header;
