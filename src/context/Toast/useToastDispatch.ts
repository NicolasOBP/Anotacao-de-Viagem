import { useToast } from "./useToast";

export const useToastDispatch = () =>
  useToast((state) => ({
    hideToast: state.hideToast,
    showToast: state.showToast,
  }));
