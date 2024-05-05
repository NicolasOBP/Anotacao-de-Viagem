import { MapToastIcon, ToastType } from "../types/icon";

export const toastMap: Record<keyof ToastType, MapToastIcon> = {
  Error: { iconColor: "red", iconName: "error-outline" },
  Success: { iconColor: "green", iconName: "done-outline" },
  Warning: { iconColor: "yellow", iconName: "warning" },
};
