import React, { useCallback, useState, useMemo } from "react";

import ToastContext from "../context/toastContext";
import Toast from "./Toast";

import "./toast.css";

const MAX_VISIBLE_TOASTS = 3;

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const handleAddNewToast = useCallback(({ message, type }) => {
    const id = Math.random().toString(16).slice(2);
    const newToast = {
      id,
      message,
      type,
    };

    setToasts((prev) => [newToast, ...prev]);
  }, []);

  const handleRemoveToast = useCallback((id) => {
    setToasts((prev) => {
      return prev.filter((toast) => toast.id !== id);
    });
  }, []);

  const contextValue = useMemo(() => {
    return { onAddNewToast: handleAddNewToast };
  }, [handleAddNewToast]);

  const visibleToasts = toasts.slice(-MAX_VISIBLE_TOASTS);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="toast-list-container">
        {visibleToasts.map((toast) => {
          return (
            <Toast key={toast.id} {...toast} onClose={handleRemoveToast} />
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
