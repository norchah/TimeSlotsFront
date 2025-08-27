import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      id: null,
      username: '',
      isActive: false,
      roles: [],
      isLoggedIn: false,
      addUser: (userData) =>
        set({
          id: userData.id,
          username: userData.username,
          isActive: userData.isActive,
          roles: userData.roles,
          isLoggedIn: true,
        }),
      clearUser: () => {
        set({
          id: null,
          username: '',
          isActive: false,
          roles: [],
          isLoggedIn: false,
        });
        localStorage.removeItem('user-data');
      }
    }),
    {
      name: 'user-data', // Ключ в localStorage
      storage: createJSONStorage(() => localStorage), // Используем localStorage
    }
  )
);