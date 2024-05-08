import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const NewsCard = ({ article }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: article.urlToImage }}
      style={styles.image}
      resizeMode="contain"
    />
    <Text style={styles.title}>{article.title}</Text>
    <Text style={styles.description}>{article.description}</Text>
    <Text style={styles.source}>{article.source.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
    fontFamily: "RobotoSlab-Bold",
    color:'#0000FF',
  
  },
  description: {
    fontSize: 16,
    color: "#333333",
    fontFamily: "RobotoSlab-Regular",
    marginTop: 12,


  },
  source: {
    fontSize: 14,
    color: "#DC143C",
    marginTop: 4,
    fontFamily: "RobotoSlab-SemiBold",
    marginTop: 12,

  },
});

export default NewsCard;
