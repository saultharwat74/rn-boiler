/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {rootStore, StoreProvider, trunk} from './src/store';
import {createStackNavigator} from '@react-navigation/stack';
import {ColorPalette, ColorPaletteModal, Home} from './src/screens';
import { BottomTabsNavigator } from './src/navigator';

const RootStack = createStackNavigator();


const App = () => {
  // const [storeLoading, setStoreLoading] = useState('loading');
  // useEffect(() => {
  //   const rehydrate = async () => {
  //     await trunk.init();
  //     setStoreLoading('loaded');
  //   };
  //   rehydrate();
  // }, []);

  return (
    // <StoreProvider value={rootStore}>
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
    // </StoreProvider>
  );
};

export default App;
