import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import {ColorBox} from '../components';



const ColorPalette:React.FC<{route: any}> = ({route}) => {
    return <SafeAreaView>
    <FlatList data={route.params.colors} style={styles.container} keyExtractor={({hexCode}) => hexCode} renderItem={({item, index}) => (
      <ColorBox  key={index} {...item}/>
    )}
    ListHeaderComponent={<Text style={styles.heading}>{route.params.paletteName}</Text>}
    />
</SafeAreaView>
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 40,
        backgroundColor: "white"
    },
      heading: {
        fontWeight: "bold",
        color: "white"
      }
})
export default ColorPalette