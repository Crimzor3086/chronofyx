import { create } from 'zustand';

const useToastStore = create((set) => ({
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        {
          id: Date.now(),
          duration: 5000,
          ...toast,
        },
      ],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));

export function useToast() {
  const { toasts, addToast, removeToast } = useToastStore();

  const toast = {
    success: (message, options = {}) =>
      addToast({ type: 'success', message, ...options }),
    error: (message, options = {}) =>
      addToast({ type: 'error', message, ...options }),
    warning: (message, options = {}) =>
      addToast({ type: 'warning', message, ...options }),
    info: (message, options = {}) =>
      addToast({ type: 'info', message, ...options }),
  };

  return { toasts, toast, removeToast };
} 