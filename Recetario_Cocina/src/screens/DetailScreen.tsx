import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App'; // Asegúrate de que la ruta es correcta
import IngredientList from '../components/IngredientList';

// Tipos para los parámetros de la ruta y la prop de navegación
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailScreenProps = {
  route: DetailScreenRouteProp;
  // navigation: ... // Agrega el tipo de prop de navegación si es necesario
};

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Suponiendo que tienes un tipo para Recipe y una función para obtener la receta por ID
  useEffect(() => {
    const { recipeId } = route.params;
    const fetchedRecipe = getRecipeById(recipeId); // Reemplazar con tu lógica de obtención de recetas
    setRecipe(fetchedRecipe);
  }, [route.params]);

  const handleLikePress = () => {
    // Actualizar el estado de isFavorite y posiblemente persistir el cambio
    setIsFavorite(!isFavorite);
  };

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.category}>{recipe.category}</Text>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.servings}>Servings: {recipe.servings}</Text>
        <IngredientList ingredients={recipe.ingredients} />
        <Button title={isFavorite ? 'Unlike' : 'Like'} onPress={handleLikePress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 16,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  servings: {
    fontSize: 16,
    marginTop: 4,
  },
  // Agregar más estilos si es necesario
});

// Reemplazar con la lógica para obtener una receta por ID
function getRecipeById(id: number): Recipe | null {
  // Lógica para obtener la receta
  return null;
}

export default DetailScreen;