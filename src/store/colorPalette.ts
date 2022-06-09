import {makeAutoObservable} from 'mobx';
import { fetchJson } from '../helpers';
import { IColorPalette, LoadingStatus } from '../types';

export class ColorPalettes {
  status: LoadingStatus = LoadingStatus.idle;
  colorPalettes: IColorPalette[] = [];
  newColorPalette: IColorPalette = {
    colors: [],
    id: undefined,
    paletteName: '',
  };
  constructor() {
    makeAutoObservable(this);
  }

  *fetchColorPalettes(): Generator<any> {
    this.status = LoadingStatus.loading;
    try {
      const res: any = yield fetchJson(
        'https://color-palette-api.kadikraman.vercel.app/palettes',
      );
      this.colorPalettes = res;
      this.status = LoadingStatus.success;
      
    } catch (e) {
      this.status = LoadingStatus.failure;
    }
  }
  
  addColorPalette() {
      this.colorPalettes = [
        {
          ...this.newColorPalette,
          id: Math.max(0, Math.max(...this.colorPalettes.map(({id}) => id))) + 1,
        },
        ...this.colorPalettes,
      ]
      this.newColorPalette = {
        colors: [],
        id: 0,
        paletteName: ""
      }
  }
}

export default new ColorPalettes();
