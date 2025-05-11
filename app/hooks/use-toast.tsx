"use client";

import { useState, useCallback } from "react";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
  open: boolean;
  [key: string]: any; // Allow other properties
}

const defaultTimeout = 3000; // 3 seconds

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]); // Explicitly type the state

  const dismiss = useCallback((id: string) => {
    // Explicitly type the id parameter
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const toast = useCallback(
    (options: Omit<Toast, "id" | "open">) => {
      // Type the options argument
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: Toast = {
        id,
        ...options,
        open: true,
      };
      setToasts((prevToasts) => [...prevToasts, newToast]);

      setTimeout(() => {
        dismiss(id);
      }, options?.duration || defaultTimeout);
    },
    [dismiss] // Add dismiss to the dependency array as it's used inside
  );

  return {
    toasts,
    toast,
    dismiss,
  };
}
