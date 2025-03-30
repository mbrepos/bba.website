import '@emotion/react';
import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      lightText: string;
      backgroundLight: string;
      backgroundDark: string;
      white: string;
      black: string;
      error: string;
      success: string;
      warning: string;
      info: string;
    };
    fonts: {
      primary: string;
      secondary: string;
      code: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };
    fontWeights: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      circle: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    mq: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    boxShadows: {
      small: string;
      medium: string;
      large: string;
    };
    transitions: {
      fast: string;
      medium: string;
      slow: string;
    };
    zIndices: {
      navbar: number;
      modal: number;
      tooltip: number;
    };
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
  }
}
