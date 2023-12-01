import "styled-components/native";
import { light } from "./light";

type ThemeType = typeof light;
declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
