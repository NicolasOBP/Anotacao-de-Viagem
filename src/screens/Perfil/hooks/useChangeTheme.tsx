import { useDadosStore } from "../../../context/dadosStore";
import { storage, themeStorage } from "../../../context/mmkv";

export default function useChangeTheme() {
  const { theme, setTheme } = useDadosStore();
  function changeTheme() {
    if (theme == "light") {
      storage.set(themeStorage, "dark");
      setTheme("dark");
    } else {
      storage.set(themeStorage, "light");
      setTheme("light");
    }
  }
  return { changeTheme };
}
