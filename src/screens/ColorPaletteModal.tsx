import {
  Alert,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {observer} from 'mobx-react-lite';
import {useStore} from '../store';
import {COLORS} from '../static';
import { runInAction } from 'mobx';
import { IColor } from '../types';
export const ColorPaletteModal: React.FC<{navigation: any}> = observer(
  ({navigation}) => {
    const {palettes} = useStore();
    const handleSwitch = (value: boolean, color: IColor) => {
      runInAction(() => {
        if (value === true) {
          palettes.newColorPalette = {
            ...palettes.newColorPalette,
            colors: [...palettes.newColorPalette.colors, color],
          };
        } else {
          palettes.newColorPalette = {
            ...palettes.newColorPalette,
            colors: (palettes.newColorPalette.colors =
              palettes.newColorPalette.colors.filter(
                element => element.colorName !== color.colorName,
              )),
          };
        
      }
      })
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Name of the palette</Text>
        <TextInput
          style={styles.input}
          onChangeText={value => runInAction(() => {
            (palettes.newColorPalette.paletteName = value)
          })}
          value={palettes.newColorPalette.paletteName}
          placeholder={'Palette name'}
        />
        <FlatList
          data={COLORS}
          keyExtractor={item => item.colorName}
          renderItem={({item}) => (
            <View style={styles.color}>
              <Text>{item.colorName}</Text>
              <Switch
                value={
                  !!palettes.newColorPalette.colors.find(
                    element => element.colorName === item.colorName,
                  )
                }
                onValueChange={value => handleSwitch(value, item)}
              />
            </View>
          )}
        />
        <TouchableOpacity
          onPress={() => {
            if (!palettes.newColorPalette.paletteName) {
              Alert.alert('Please enter a palette name');
            } else if(palettes.newColorPalette.colors.length < 3) {
              Alert.alert("Please add at least 3 colors");
            } else {
              palettes.addColorPalette();
              navigation.navigate('Home');
            }
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  title: {
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default ColorPaletteModal;
