import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Text, Paragraph } from 'react-native-paper';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 8;
const CARD_WIDTH = (width - CARD_MARGIN * 3) / 2;

export default function ProductCard({
  image,
  name,
  price,
  category,
  stock,
}) {
  return (
    <Card style={[styles.card, { width: CARD_WIDTH }]}>
      <Card.Cover source={{ uri: image }} style={styles.image} />

      <Card.Content>
        <Title style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Title>
        <View style={styles.row}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.price}>LKR{price}</Text>
        </View>
        <Paragraph style={styles.stock} numberOfLines={1} ellipsizeMode="tail">
          {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
        </Paragraph>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: CARD_MARGIN / 2,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    marginTop: 8,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  category: {
    fontSize: 11,
    color: '#616161',
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  stock: {
    fontSize: 12,
    marginBottom: 4,
  },
});
