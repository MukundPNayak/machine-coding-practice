import { useContext } from "react";
import ToastContext from "../context/toastContext";

const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  const { onAddNewToast } = context;

  return {
    onAddNewToast,
  };
};

export default useToast;
