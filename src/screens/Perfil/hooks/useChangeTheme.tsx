import { useDadosStore } from "../../../context/dadosStore";
import { storage } from "../../../context/mmkv";

export default function useChangeTheme() {
  const { theme, setTheme } = useDadosStore();
  function changeTheme() {
    if (theme == "light") {
      storage.set("theme.type", "dark");
      setTheme("dark");
    } else {
      storage.set("theme.type", "light");
      setTheme("light");
    }
  }
  return { changeTheme };
}
