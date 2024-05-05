import { storage, themeStorage, useDadosStore } from "@/context";

export const useChangeTheme = () => {
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
};
