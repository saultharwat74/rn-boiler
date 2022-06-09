export enum LoadingStatus {
    idle = 'idle',
    success = 'success',
    failure = 'failure',
    loading = 'loading',
  }
  
  export interface IColor {
    colorName: string;
    hexCode: string;
  }
  
  export interface IColorPalette {
    id: any;
    paletteName: string;
    colors: IColor[];
  }