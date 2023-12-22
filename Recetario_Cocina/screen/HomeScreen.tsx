import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import data from '../data/products';
import styles from '../styles/stylesHome';
import itemFood from '../components/itemfood';
import RecentFood from '../components/recientfood';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, 
  TextInput,
  Pressable,
  RefreshControl,
} from 'react-native';

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

interface HomeScreenProps {
  navigation: {
    navigate: (route: string, params?: any) => void;
  };
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [foodArr, setFood] = useState(data);
  const [text, setText] = useState('');

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setFood(filterItems(text));
  }, [text]);

  const filterItems = (query: string) => {
    return data.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  function search() {
    console.log(text);
  }

  return (
    // JSX remains the same
    <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              >
              {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )}
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <View style={styles.containerInput}>
                    <View style={styles.searchView}>
                    <Pressable onPress={search}>        
                      <Image  style={styles.searchImage} source={require('../images/search.png')} />
                    </Pressable>
                    </View>
                    <TextInput
                      style={styles.textInput}
                      placeholder="What do you want to eat?"
                      placeholderTextColor="#fff"
                      onChangeText={text => setText(text)}
                      value={text}
                    />                     
                    <View style={styles.recordView}>                       
                      <Image  style={styles.searchImage} source={require('../images/recordvoice.png')} />
                    </View> 
                  </View>                
                  <Text style={[styles.trending]}>TRENDING</Text>
                  <itemFood foodArr={foodArr} navigation={navigation} setFood={setFood}/> 
                  <Text style={[styles.recent]}>RECENT</Text>
                  <RecentFood Arrfood={foodArr} navigation={navigation} setFood={setFood}/>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
      </>
  );
};

export default HomeScreen;
