import React from 'react';
import Link from "next/link";

export default function LinkMain({letter='small', className=''}) {
  const text = letter === 'big' ? 'На главную' : 'на главную';
  return (
    <Link className={`underline hover:text-blue-300 ${className}`} href='/'>{text}</Link>
  );
}
