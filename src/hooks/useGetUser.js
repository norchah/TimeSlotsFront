'use client';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/useUserStore';
import ApiClient from '@/api/api';
import UsersApi from "../api/users";

export default function useGetUser() {
  const getUsers = async () => {
    const api = new UsersApi()
    try {
      const result = api.get_users()
    } catch (e){
      console.log(`Ошибка получения пользователей ${e}`)
    } finally {
    }
  }

  return getUsers;
}