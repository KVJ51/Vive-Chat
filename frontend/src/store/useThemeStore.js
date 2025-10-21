import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("vivechat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("vivechat-theme", theme);
    set({ theme });
  },
}));