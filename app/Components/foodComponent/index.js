import React from 'react';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';
import styles from './style';
const FoodComponent = props => {
  let imageUrl = props?.imageUrl;
  let foodTitle = props?.foodTitle;
  let Shorttext = props?.Shorttext;
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title}>{foodTitle}</Text>
      <Text style={styles.shortText}>{Shorttext}</Text>
    </View>
  );
};
export default FoodComponent;
