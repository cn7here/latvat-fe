import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    color: {
      core: {
        primary: string;
        org_50: string;
        org_100: string;
        org_200: string;
        org_300: string;
        org_400: string;
        org_500: string;
        org_600: string;
        org_700: string;
        org_800: string;
        org_900: string;
      };
      text: {
        primary: string;
        second: string;
        third: string;
      };
    };
  }
}
