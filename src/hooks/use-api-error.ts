import { useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/stores/authStore';

interface ApiError {
  response?: {
    status: number;
    data?: {
      message?: string;
      errors?: Record<string, string[]>;
    };
  };
  message?: string;
}

export function useApiError() {
  const { toast } = useToast();
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleError = useCallback(
    (error: ApiError, customMessage?: string) => {
      // Handle network errors
      if (!error.response) {
        toast({
          title: 'Network Error',
          description: 'Please check your internet connection and try again.',
          variant: 'destructive',
        });
        return;
      }

      const status = error.response.status;
      const message = error.response.data?.message || customMessage || 'An error occurred';

      switch (status) {
        case 401:
          // Unauthorized - logout and redirect to login
          logout();
          router.push('/login');
          toast({
            title: 'Session Expired',
            description: 'Please login again to continue.',
            variant: 'destructive',
          });
          break;

        case 403:
          // Forbidden
          toast({
            title: 'Access Denied',
            description: 'You do not have permission to perform this action.',
            variant: 'destructive',
          });
          break;

        case 404:
          // Not found
          toast({
            title: 'Not Found',
            description: message,
            variant: 'destructive',
          });
          break;

        case 422:
          // Validation error
          const errors = error.response.data?.errors;
          if (errors) {
            const errorMessages = Object.entries(errors)
              .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
              .join('\n');

            toast({
              title: 'Validation Error',
              description: errorMessages,
              variant: 'destructive',
            });
          } else {
            toast({
              title: 'Validation Error',
              description: message,
              variant: 'destructive',
            });
          }
          break;

        case 429:
          // Too many requests
          toast({
            title: 'Too Many Requests',
            description: 'Please wait a moment before trying again.',
            variant: 'destructive',
          });
          break;

        case 500:
        case 502:
        case 503:
          // Server error
          toast({
            title: 'Server Error',
            description: 'Something went wrong on our end. Please try again later.',
            variant: 'destructive',
          });
          break;

        default:
          // Generic error
          toast({
            title: 'Error',
            description: message,
            variant: 'destructive',
          });
      }
    },
    [toast, router, logout]
  );

  return { handleError };
}