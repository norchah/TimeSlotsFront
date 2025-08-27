'use client';

import React from 'react';
import Link from 'next/link';
import {Button} from "@heroui/react";

export default function NotFoundPage() {
  return (
    <div className='flex flex-row justify-center pt-40 pb-40 gap-4 items-center'>
      <div>
        <h1 className='text-7xl'>404</h1>
      </div>
      <div className='flex flex-col justify-center'>
        <p>Страница не найдена, пиздуй на</p>
        <Button as={Link} href='/' color="primary">ГЛАВНУЮ</Button>
      </div>

    </div>
  );
}