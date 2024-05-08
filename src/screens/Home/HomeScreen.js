import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import NewsCard from '../../components/Card/NewsCard';
import i18n from '../../config/i18n';
import Header from '../../components/Header/Header';

const HomeScreen = () => {
  const [language, setLanguage] = useState(i18n.locale);
  const isEnglish = language === 'en';

  const articles = i18n.translations[language].articles || [];

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'tr' : 'en';
    i18n.locale = newLanguage;
    setLanguage(newLanguage); 
  };

  return (
    <View style={{ flex: 1 }}>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <ScrollView style={styles.container}>
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
  },
});

export default HomeScreen;
