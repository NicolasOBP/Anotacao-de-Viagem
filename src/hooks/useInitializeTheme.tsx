import { useEffect } from "react";
import { useDadosStore, storage, themeStorage } from "@/context";

export const useInitializeTheme = () => {
  const { theme, setTheme } = useDadosStore();

  useEffect(() => {
    setTheme(storage.getString(themeStorage) as "light" | "dark");
  }, []);

  return { theme };
};
