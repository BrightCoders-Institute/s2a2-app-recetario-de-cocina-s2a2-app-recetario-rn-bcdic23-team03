
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


type RecipeCardProps = {
  name: string;
  image: string;
  onPress: () => void; 
};

const RecipeCard: React.FC<RecipeCardProps> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    height: 150, 
    resizeMode: 'cover', 
  },
  name: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default RecipeCard;
