import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
    };

    breakpoint: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
      desktopL: string;
    };

    easings: {
      easeInSine: string;
      easeOutSine: string;
      easeInOutSine: string;
      easeInQuad: string;
      easeOutQuad: string;
      easeInOutQuad: string;
      easeInCubic: string;
      easeOutCubic: string;
      easeInOutCubic: string;
      easeInQuart: string;
      easeOutQuart: string;
      easeInOutQuart: string;
      easeInQuint: string;
      easeOutQuint: string;
      easeInOutQuint: string;
      easeInExpo: string;
      easeOutExpo: string;
      easeInOutExpo: string;
      easeInCirc: string;
      easeOutCirc: string;
      easeInOutCirc: string;
      easeInBack: string;
      easeOutBack: string;
      easeInOutBack: string;
    };
  }
}
