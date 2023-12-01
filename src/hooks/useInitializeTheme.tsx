import { useEffect } from "react";
import { useDadosStore } from "../context/dadosStore";
import { storage } from "../context/mmkv";

export default function useInitializeTheme() {
  const { theme, setTheme } = useDadosStore();

  useEffect(() => {
    setTheme(storage.getString("theme.type") as "light" | "dark");
  }, []);

  return { theme };
}
