'use client';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/useUserStore';
import ApiClient from '@/api/api';

export default function useLogout() {
  const router = useRouter();
  const clearUser = useUserStore((state) => state.clearUser);

  const handleLogout = async () => {
    try {
      const api = new ApiClient();
      const response = await api.logout();
      clearUser(); // Очищаем Zustand и localStorage
      router.push('/auth'); // Редирект на страницу логина
    } catch (error) {
      console.error('Logout failed:', error);
      // Опционально: Показать уведомление об ошибке
      alert('Ошибка при выходе, попробуйте снова');
    }
  };

  return handleLogout;
}