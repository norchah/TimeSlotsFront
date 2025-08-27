'use client';

import React from 'react';
import {useState} from 'react';
import RegisterForm from "../../forms/registration.form";
import LoginForm from "../../forms/login.form";
import {Link} from "@heroui/link";

export default function AuthPage() {
  const [login, setLogin] = useState(true)
  const handleClick = () => {
    setLogin(!login)
  }
  let title = 'Вход'
  let text = 'Нужна'
  let textLink = 'регистрация'

  let form = login ? <LoginForm/> : <RegisterForm/>

  if (!login) {
    title = 'Регистрация'
    text = 'Нужен'
    textLink = 'вход'
  }

  return (
    <div className="flex flex-col items-center gap-3 text-2xl">
      <h2 className='text-4xl'>{title}</h2>
      {form}
      <p className='text-xl'>
        {text} <Link className='text-xl cursor-pointer' onPress={handleClick}>{textLink}</Link>?
      </p>
    </div>
  );
}