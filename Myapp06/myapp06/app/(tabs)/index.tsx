import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function QuotePanel() {
  return (
    <View style={styles.panel}>
      <Text style={styles.quoteText}>
        "Se Deus criou as pessoas para amar e as coisas para cuidar, por que amamos as coisas e usamos as pessoas?."
      </Text>
      <Image
        source={{ uri: 'https://wallpaperaccess.com/full/4220489.jpg' }}
        style={styles.authorImage}
      />
      <Text style={styles.authorName}>- Bob Marley</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#green',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#000',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  authorImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#black',
  
  },
});