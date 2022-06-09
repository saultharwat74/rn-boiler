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

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreens = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({route}) => ({
          title: (route.params as {paletteName: string; colors: any[]})
            .paletteName,
        })}
      />
    </MainStack.Navigator>
  );
};
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
     <RootStack.Navigator screenOptions={{
       presentation: "modal"
     }}>
      <RootStack.Screen  name='Main' component={MainStackScreens} options={{
        headerShown: false
      }}/>
      <RootStack.Screen name='ColorPaletteModal' component={ColorPaletteModal}/>
     </RootStack.Navigator>
    </NavigationContainer>
    // </StoreProvider>
  );
};

export default App;
