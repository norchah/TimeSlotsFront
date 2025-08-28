'use client';

import React from 'react';
import {useState, useEffect} from 'react';
import RegisterForm from "../../forms/registration.form";
import LoginForm from "../../forms/login.form";
import {Link} from "@heroui/link";
import { useSearchParams } from 'next/navigation';
import {useUserStore} from "../../stores/useUserStore";

export default function AuthPage({onClose}) {
  const [login, setLogin] = useState(true)
  const searchParams = useSearchParams();
  const clearUser = useUserStore(state => state.clearUser);

  useEffect(() => {
    const reason = searchParams.get('reason');
    if (reason === "no-token") {
      clearUser()
    }
  }, [searchParams, clearUser])

  const handleClick = () => {
    setLogin(!login)
  }
  let title = 'Вход'
  let text = 'Нужна'
  let textLink = 'регистрация'

  let form = login ? <LoginForm onClose={onClose}/> : <RegisterForm onClose={onClose}/>

  if (!login) {
    title = 'Регистрация'
    text = 'Нужен'
    textLink = 'вход'
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3 text-2xl">
      <h2 className='text-4xl'>{title}</h2>
      {form}
      <p className='text-xl'>
        {text} <Link className='text-xl cursor-pointer' onPress={handleClick}>{textLink}</Link>?
      </p>
    </div>
  );
}