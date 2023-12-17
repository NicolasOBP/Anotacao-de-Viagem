import { MMKV } from "react-native-mmkv";

export const themeStorage = "theme.type";

export const storage = new MMKV({
  id: "theme-storage",
});
