import { useEffect } from "react";
import { useDadosStore } from "../context/dadosStore";
import { storage, themeStorage } from "../context/mmkv";

export default function useInitializeTheme() {
  const { theme, setTheme } = useDadosStore();

  useEffect(() => {
    setTheme(storage.getString(themeStorage) as "light" | "dark");
  }, []);

  return { theme };
}
