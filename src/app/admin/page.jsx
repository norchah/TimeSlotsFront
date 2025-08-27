'use client';

import React, {useEffect, useState} from 'react';
import UserApi from "../../api/users";
import Link from "next/link";
import {Button} from "@heroui/react";

export default function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const api = new UserApi()
      const res = await api.get_users()
      console.log(res.data)
      setUsers(res.data)
    }
    fetchUsers()
  }, [])

  function getUsersItems() {
    return users.map(user => {
      return (
        <li key={user.id} className="flex gap-3 text-2xl">
          <p>User: {user.id}</p>
          <Link href={`/admin/${user.id}`} className='underline text-cyan-400' id={user.id}> {user.username}</Link>
          {user.roles.map(role => {
            return <p key={role.id}>{role.name}</p>
          })}
        </li>
      )
    })
  }

  return (
    <ul className='flex flex-col justify-center items-center gap-5'>
      <h1 className='text-7xl'>Пользователи</h1>
      {getUsersItems()}
    </ul>
  )
}
