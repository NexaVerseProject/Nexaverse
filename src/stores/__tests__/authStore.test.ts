import { renderHook, act } from '@testing-library/react';
import useAuthStore from '../authStore';
import axiosInstance from '@/lib/axios';

// Mock axios
jest.mock('@/lib/axios');
const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock as any;

describe('AuthStore', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset store state
    useAuthStore.setState({
      user: null,
      token: null,
      isLoading: false,
      isAuthenticated: false,
    });
  });

  describe('login', () => {
    it('should login successfully and update state', async () => {
      const mockResponse = {
        data: {
          user: {
            id: '1',
            email: 'test@example.com',
            name: 'Test User',
            role: 'freelancer',
          },
          token: 'mock-token',
        },
      };

      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const { result } = renderHook(() => useAuthStore());

      await act(async () => {
        await result.current.login('test@example.com', 'password');
      });

      expect(mockedAxios.post).toHaveBeenCalledWith('/auth/login', {
        email: 'test@example.com',
        password: 'password',
      });

      expect(localStorage.setItem).toHaveBeenCalledWith('authToken', 'mock-token');
      expect(result.current.user).toEqual(mockResponse.data.user);
      expect(result.current.token).toBe('mock-token');
      expect(result.current.isAuthenticated).toBe(true);
      expect(result.current.isLoading).toBe(false);
    });

    it('should handle login error', async () => {
      const mockError = new Error('Invalid credentials');
      mockedAxios.post.mockRejectedValueOnce(mockError);

      const { result } = renderHook(() => useAuthStore());

      await act(async () => {
        await expect(result.current.login('test@example.com', 'wrong-password')).rejects.toThrow('Invalid credentials');
      });

      expect(result.current.isLoading).toBe(false);
      expect(result.current.isAuthenticated).toBe(false);
    });
  });

  describe('logout', () => {
    it('should clear auth state and localStorage', () => {
      const { result } = renderHook(() => useAuthStore());

      // Set initial authenticated state
      act(() => {
        useAuthStore.setState({
          user: { id: '1', email: 'test@example.com', name: 'Test', role: 'freelancer' },
          token: 'mock-token',
          isAuthenticated: true,
        });
      });

      act(() => {
        result.current.logout();
      });

      expect(localStorage.removeItem).toHaveBeenCalledWith('authToken');
      expect(result.current.user).toBeNull();
      expect(result.current.token).toBeNull();
      expect(result.current.isAuthenticated).toBe(false);
    });
  });

  describe('register', () => {
    it('should register successfully and update state', async () => {
      const mockResponse = {
        data: {
          user: {
            id: '1',
            email: 'new@example.com',
            name: 'New User',
            role: 'freelancer',
          },
          token: 'new-token',
        },
      };

      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const { result } = renderHook(() => useAuthStore());

      await act(async () => {
        await result.current.register({
          email: 'new@example.com',
          password: 'password',
          name: 'New User',
        });
      });

      expect(mockedAxios.post).toHaveBeenCalledWith('/auth/register', {
        email: 'new@example.com',
        password: 'password',
        name: 'New User',
      });

      expect(localStorage.setItem).toHaveBeenCalledWith('authToken', 'new-token');
      expect(result.current.user).toEqual(mockResponse.data.user);
      expect(result.current.isAuthenticated).toBe(true);
    });
  });

  describe('checkAuth', () => {
    it('should verify authentication with valid token', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        role: 'freelancer',
      };

      mockedAxios.get.mockResolvedValueOnce({ data: mockUser });

      const { result } = renderHook(() => useAuthStore());

      // Set token in state
      act(() => {
        useAuthStore.setState({ token: 'valid-token' });
      });

      await act(async () => {
        await result.current.checkAuth();
      });

      expect(mockedAxios.get).toHaveBeenCalledWith('/auth/me');
      expect(result.current.user).toEqual(mockUser);
      expect(result.current.isAuthenticated).toBe(true);
    });

    it('should handle invalid token', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Unauthorized'));

      const { result } = renderHook(() => useAuthStore());

      act(() => {
        useAuthStore.setState({ token: 'invalid-token' });
      });

      await act(async () => {
        await result.current.checkAuth();
      });

      expect(localStorage.removeItem).toHaveBeenCalledWith('authToken');
      expect(result.current.user).toBeNull();
      expect(result.current.token).toBeNull();
      expect(result.current.isAuthenticated).toBe(false);
    });

    it('should skip check if no token exists', async () => {
      const { result } = renderHook(() => useAuthStore());

      await act(async () => {
        await result.current.checkAuth();
      });

      expect(mockedAxios.get).not.toHaveBeenCalled();
      expect(result.current.isAuthenticated).toBe(false);
    });
  });

  describe('updateUser', () => {
    it('should update user data', () => {
      const { result } = renderHook(() => useAuthStore());

      const initialUser = {
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        role: 'freelancer',
      };

      act(() => {
        useAuthStore.setState({ user: initialUser });
      });

      act(() => {
        result.current.updateUser({ name: 'Updated Name', avatar: 'avatar.jpg' });
      });

      expect(result.current.user).toEqual({
        ...initialUser,
        name: 'Updated Name',
        avatar: 'avatar.jpg',
      });
    });

    it('should not update if no user exists', () => {
      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.updateUser({ name: 'Updated Name' });
      });

      expect(result.current.user).toBeNull();
    });
  });
});