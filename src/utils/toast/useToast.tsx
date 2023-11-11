import { DeviceEventEmitter } from "react-native";
import { SHOW_TOAST_MESSAGE } from "./toastMessage";

type options = {
  message: string;
  time?: number;
};

const toast = {
  succes: (options: options) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "succes" });
  },
  danger: (options: options) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "danger" });
  },
};
export default toast;
