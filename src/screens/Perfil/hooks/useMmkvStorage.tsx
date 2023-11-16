import { useDadosStore } from "../../../context/dadosStore";
import { storage } from "../../../context/mmkv";

export default function useMmkvStorage() {
  const { setTheme, theme } = useDadosStore();
  function changeTheme() {
    setTheme(theme);
    storage.set("theme.type", theme);
  }
  return { changeTheme };
}
