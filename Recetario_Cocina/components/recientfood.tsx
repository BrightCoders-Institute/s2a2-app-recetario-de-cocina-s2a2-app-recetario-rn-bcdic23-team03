import * as React from 'react';
import { ScrollView, View, Text, Image, Pressable, ImageSourcePropType } from 'react-native';
import { NavigationProp } from '@react-navigation/native'; // Asumiendo el uso de react-navigation
import styles from '../styles/stylesHome';

// Definir el tipo de cada propiedad en tu componente
interface RecentFoodProps {
  Arrfood: Array<{
    id: string;
    love: string;
    name: string;
    description: string;
    image: ImageSourcePropType;
  }>;
  navigation: NavigationProp<any>; // Especificar el tipo de navegación si es necesario
  setFood: (food: any) => void; // Ajusta el tipo según corresponda
}

const RecentFood: React.FC<RecentFoodProps> = ({ Arrfood, navigation, setFood }) => {
  return (
    <ScrollView horizontal={true}>
      {Arrfood.map((r) => {
        if (r.love === '1') {
          return (
            <View style={styles.containerCardRecent} key={r.id}>
              <Pressable
                onPress={() => {
                  navigation.navigate('DetailFood', {
                    food: r,
                    title: 'Recent',
                    foodArr: Arrfood,
                    setFood: setFood,
                  });
                }}>
                <Image style={styles.foodCardRecent} source={r.image} />
                <Text style={styles.sectionTitleRecent}>{r.name}</Text>
                <Text style={styles.sectionTitleRecent}>{r.description}</Text>
              </Pressable>
            </View>
          );
        }
      })}
    </ScrollView>
  );
};

export default RecentFood;
