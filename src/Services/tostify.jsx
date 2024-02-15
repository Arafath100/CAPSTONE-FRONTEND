// Toast notification functions using react-toastify

// Warning toast
import { toast } from "react-toastify";

const defaultToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export function toastWarn(text) {
  toast.warn(text, defaultToastOptions);
}

export function toastSuccess(text) {
  toast.success(text, defaultToastOptions);
}

export function defaultToast(text) {
  toast(text, defaultToastOptions);
}

export function errorToast(text) {
  toast.error(text, defaultToastOptions);
}
