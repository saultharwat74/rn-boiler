import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
export const PaletteReview: React.FC<{
  navigation: any;
  colorPalette: {
    paletteName: string;
    colors: {
      colorName: string;
      hexCode: string;
    }[];
  };
}> = ({colorPalette, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ColorPalette', colorPalette);
      }}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
      style={styles.list}
        horizontal={true}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => <View style={[styles.box,{
            backgroundColor: item.hexCode
        }]}/>}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom:10
  },
  box: {
      height: 30,
      width: 30,
      marginRight: 10,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 10
  },
  list: {
      marginBottom: 20
  }
});
export default PaletteReview;
