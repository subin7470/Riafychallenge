import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Constants from '../../config/Constants';
import styles from './style';
import {Icon} from '@rneui/themed';
import FoodComponent from '../../Components/foodComponent';
const HomeScreen = () => {
  const [foodArray, setFoodArray] = useState(Constants.foodList);
  const [searchText, setSearchText] = useState('');
  const FlatList_Header = () => {
    return (
      <View style={styles.flatlistHeaderContainer}>
        <Text style={styles.flatListheaderText}>Foods</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Constants.APP_WHITE_COLOR}}>
      <View style={styles.headerBorder}>
        <Text style={styles.headerText}>Search</Text>
      </View>
      <View style={styles.textInputRow}>
        <Icon
          size={22}
          name="search"
          type="material"
          color={Constants.APP_TEXT_COLOR}
        />
        <TextInput
          placeholder="Food name"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.textInput}
          placeholderTextColor={Constants.APP_PLACEHOLDER_COLOR}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foodArray}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={FlatList_Header}
        contentContainerStyle={styles.flatListContainer}
        style={{flex: 1}}
        renderItem={({item, index}) => (
          <FoodComponent
            item={item}
            index={index}
            imageUrl={item.imageUrl}
            foodTitle={item.Ingredient}
            Shorttext={item.Shorttext}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
