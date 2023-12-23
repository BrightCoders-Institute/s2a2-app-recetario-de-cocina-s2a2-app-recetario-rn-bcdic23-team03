import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
  ImageSourcePropType
} from 'react-native';
import styles from '../styles/stylesDetail';

interface DetailFoodProps {
  route: {
    params: {
      food: {
        id: string;
        love: string;
        name: string;
        image: ImageSourcePropType;
        servings: string;
        ingredients: Array<{
          ingredient: string;
          quantity: string;
        }>;
      };
      title: string;
      foodArr: Array<any>; // Ajusta según tu estructura de datos
      setFood: (food: any) => void; // Ajusta según la función que pasas
    };
  };
  navigation: {
    navigate: (route: string) => void;
  };
}

const DetailFood: React.FC<DetailFoodProps> = ({ route, navigation }) => {
  const { food, title, foodArr, setFood } = route.params;
  const [isFav, setIsFav] = useState(food.love);

  function changeLike2() {
    var index = foodArr.findIndex(element => element.id === food.id);
    food.love = food.love === "0" ? "1" : "0";
    setIsFav(food.love);
    setFood([
      ...foodArr.slice(0, index),
      food,
      ...foodArr.slice(index + 1)
    ]);
  }

  return (
    // ... El resto del JSX se mantiene igual
    <>
        <View style={styles.topBar}>
          <View style={styles.leftButton}> 
            <View style={styles.backButton} testID="backButton">
            <Pressable
              onPress={() => {
                navigation.navigate('Home')
              }}>
              <Image style={[styles.icons, styles.cerrar]} source={require('../images/boton-cerrar.png')} />
            </Pressable>
            </View>
          </View>
          <View style={styles.rightButtons}>
            <View style={styles.likeButton}>
            <Pressable
              onPress={changeLike2}
              testID="likeButton">
              {food.love == "0" 
                ? <Image style={styles.iconLike} source={require('../images/like.png')} /> 
                : <Image style={styles.iconLike} source={require('../images/unlike.png')} />}
              </Pressable>
            </View>
            <View style={styles.shareButton} testID="shareButton">
              <Image style={styles.iconShare} source={require('../images/share.png')} />
            </View>
          </View>
        </View>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <View style={styles.viewDetail}>
          <Image style={styles.trendingFood} source= {food.image} />
          <Text style={styles.textDetail}>{title}</Text>
          <Text style={styles.textName}>{food.name}</Text>
          <Text style={styles.textDescription}>{`Ingredients`}</Text>
          <Text style={styles.textServings}>{`for ${food.servings} servings`}</Text> 
        </View>  
        <ScrollView style={styles.scrollView}> 
              {food.ingredients.map( (r, index) =>
                <View  style={styles.ingView} key={index}>
                  <Text style={styles.ingredients}>{r.ingredient}</Text>
                  <Text style={styles.ingredients2}> {r.quantity}</Text>
                </View>
              )}              
        </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default DetailFood;
