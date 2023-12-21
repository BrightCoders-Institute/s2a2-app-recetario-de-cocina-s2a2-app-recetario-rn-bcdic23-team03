// HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/Recipe';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [trendingRecipes, setTrendingRecipes] = useState<Recipe[]>([]);
  const [recentRecipes, setRecentRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Aquí deberías cargar las recetas y asignarlas a las variables de estado
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    // cargar recetas
  };

  const handleRecipePress = (recipeId: number) => {
    
    navigation.navigate('DetailScreen', { recipeId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trending</Text>
      <FlatList
        data={trendingRecipes}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RecipeCard
            name={item.name}
            image={item.image}
            onPress={() => handleRecipePress(item.id)}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.header}>Recent</Text>
      <FlatList
        data={recentRecipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RecipeCard
            name={item.name}
            image={item.image}
            onPress={() => handleRecipePress(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  
});

export default HomeScreen;
