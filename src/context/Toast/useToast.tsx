import { create } from "zustand";

export type ToastConfig = {
  type: "Success" | "Error" | "Warning";
  message: string;
  show: boolean;
  duration?: number;
};

export type UseToastActions = {
  config: ToastConfig;
  showToast: ({ message, type }: Omit<ToastConfig, "show">) => void;
  hideToast: () => void;
};

export const useToast = create<UseToastActions>((set) => ({
  config: { message: "", type: "Success", show: false },
  showToast: ({ message, type, duration }) =>
    set({
      config: { message: message, type: type, duration: duration, show: true },
    }),
  hideToast: () =>
    set({ config: { message: "", type: "Success", show: false, duration: 0 } }),
}));
