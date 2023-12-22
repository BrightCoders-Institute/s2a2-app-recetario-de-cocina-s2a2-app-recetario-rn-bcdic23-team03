import * as React from 'react';
import { ScrollView, View, Text, Image, Pressable, ImageSourcePropType } from 'react-native';
import { NavigationProp } from '@react-navigation/native'; // Asumiendo que estás usando react-navigation
import styles from '../styles/stylesHome';

// Definir el tipo de cada propiedad en tu componente
interface itemFoodProps {
  foodArr: Array<{
    id: string;
    love: string;
    name: string;
    description: string;
    image: ImageSourcePropType;
  }>;
  navigation: NavigationProp<any>; // Especificar el tipo de navegación si es necesario
  setFood: (food: any) => void; // Ajusta el tipo según corresponda
}

const itemFood: React.FC<itemFoodProps> = ({ foodArr, navigation, setFood }) => {
  return (
    <ScrollView horizontal={true}>
      {foodArr.map((r) => {
        if (r.love === '0') {
          return (
            <View style={styles.containerCard} key={r.id}>
              <Pressable
                onPress={() => {
                  navigation.navigate('DetailFood', {
                    food: r,
                    title: 'Trending',
                    foodArr,
                    setFood,
                  });
                }}>
                <Image style={styles.foodCard} source={r.image} />
                <Text style={styles.sectionTitle}>{r.name}</Text>
                <Text style={styles.sectionTitle}>{r.description}</Text>
              </Pressable>
            </View>
          );
        }
      })}
    </ScrollView>
  );
};

export default itemFood;
