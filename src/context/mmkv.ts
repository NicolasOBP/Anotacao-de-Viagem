import { MMKV } from "react-native-mmkv";

export const themeStorage = "theme.type";
export const etanolPreco = "etanol.preco";
export const gasolinaPreco = "gas.preco";

export const storage = new MMKV({
  id: "theme-storage",
});
