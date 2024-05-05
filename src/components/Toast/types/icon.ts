type Icon = "error-outline" | "done-outline" | "warning";
type Color = "green" | "yellow" | "red";

export type MapToastIcon = {
  iconName: Icon;
  iconColor: Color;
};
export type ToastType = {
  Error: undefined;
  Warning: undefined;
  Success: undefined;
};
