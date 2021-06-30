import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICard} from '../../Types/Cards';

const CardItem: React.FC<ICard> = (card: ICard) => {
  return (
    <View style={styles.card}>
      <Text>ID: {card.cardId}</Text>
      <Text>Name: {card.name}</Text>
      <Text>Text: {card.text}</Text>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
