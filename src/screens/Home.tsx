import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PaletteReview} from '../components';
import {useStore} from '../store';
import ColorPalettes from '../store/colorPalette';

const Home: React.FC<{
  navigation: any;
}> = observer(({navigation}) => {
  const {palettes} = useStore();
  const [isRefreshing, setIsRefreshing] = useState(true);
  useEffect(() => {
    ColorPalettes.fetchColorPalettes();
  }, []);
  const handleRefreshing = async () => {
    setIsRefreshing(true);
    await ColorPalettes.fetchColorPalettes();
    setIsRefreshing(false);
  };
  return (
    <SafeAreaView>
      
      <FlatList
        style={styles.list}
        data={palettes.colorPalettes}
        keyExtractor={item => item.paletteName}
        renderItem={({item}) => (
          <PaletteReview colorPalette={item} navigation={navigation} />
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefreshing}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('ColorPaletteModal')}>
            <Text style={styles.buttonText}>Add a color scheme</Text>
          </TouchableOpacity>
        }
      />
      <Text>{palettes.status}</Text>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "teal",
    marginBottom: 10
  }
});

export default Home;
