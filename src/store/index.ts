// import {createContext, useContext} from 'react';
import ColorPalettes from './colorPalette';
// import {AsyncTrunk} from 'mobx-sync';
// import AsyncStorage from '@react-native-async-storage/async-storage';
export class RootStore {
  stores = {
    palettes: ColorPalettes,
  };
}

export {default as ColorPalettes} from './colorPalette';
export default new RootStore();
// export const rootStore = new RootStore();
// export const trunk = new AsyncTrunk({
//   rootStore: rootStore.palettes
// }, {
//     storage: AsyncStorage,
// })
// export const StoreContext = createContext(rootStore);
// export const StoreProvider = StoreContext.Provider;
export const useStore = () => {
  const {stores} = new RootStore();
  return {
    ...stores,
  };
};
