import { useForm as useHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from './useToast';

export function useForm(schema, options = {}) {
  const toast = useToast();
  
  const form = useHookForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    ...options,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      if (options.onSubmit) {
        await options.onSubmit(data);
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred while submitting the form.');
      if (options.onError) {
        options.onError(error);
      }
    }
  });

  return {
    ...form,
    handleSubmit,
  };
} 