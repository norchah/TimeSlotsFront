import React from 'react';
import {Button} from "@heroui/react";

export default function ButtonBase(
  {
    children,
    type='button',
    onClick=()=>{},
    disabled=false,
    className=''
  })
{
  return (
    <button type={type} disabled={disabled} className={`transition-all hover:bg-sky-700 hover:cursor-pointer px-5 bg-sky-600 py-2 rounded-xl text-sm ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
