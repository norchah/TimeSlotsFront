'use client';

import React from 'react';
import {useState} from 'react';
import {Form, Input} from "@heroui/react";
import ApiClient from "@/api/api";
import {useUserStore} from "@/stores/useUserStore";
import {useRouter} from 'next/navigation'
import ButtonSubmit from "@/components/ui/buttons/button.base";

export default function RegisterForm({onClose}) {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const addUser = useUserStore((state) => state.addUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = new ApiClient();
    const data = await api.register(username);
    if (data.status === 200) {
      addUser(data.data)
      router.push('/booking'); // Редирект на страницу записи
    }
  }


  return (
    <Form className="w-full max-w-xs items-center" onSubmit={handleSubmit}>
      <Input
        isRequired
        isClearable
        color='primary'
        label='Username'
        variant='bordered'
        labelPlacement='outside'
        radius='md'
        name='username'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <ButtonSubmit color="primary" className='mt-3' type='submit' onPress={onClose}>Зарегаться</ButtonSubmit>
    </Form>
  );
}