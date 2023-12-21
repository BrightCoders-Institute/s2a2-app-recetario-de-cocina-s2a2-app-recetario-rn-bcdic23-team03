import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


type Ingredient = {
  name: string;
  quantity: string;
};

type IngredientListProps = {
  ingredients: Ingredient[];
};

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => `ingredient-${index}`}
        renderItem={({ item }) => (
          <View style={styles.ingredientItem}>
            <Text style={styles.ingredientQuantity}>{item.quantity}</Text>
            <Text style={styles.ingredientName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  ingredientItem: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  ingredientQuantity: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  ingredientName: {
    
  },
});

export default IngredientList;
