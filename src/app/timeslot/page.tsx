'use client';
import React from 'react';
import Link from "next/link";
import LinkMain from "@/components/ui/links/link.main";
import MiddlePosition from "@/components/common/middlePosition/middle";
import CustomCalendar from "@/components/common/calendar/calendar";


export default function TimeslotPage () {
  return (
    <MiddlePosition className="gap-10">
      <h1 className='text-7xl'>Щас будем добавлять слоты как-то</h1>
      <LinkMain letter='big' className='text-2xl'/>
    </MiddlePosition>

  )

};