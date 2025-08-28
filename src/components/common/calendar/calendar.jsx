'use client';
import {useState} from 'react';
import Month from "@/components/common/calendar/month";
import {getLocalTimeZone, toCalendarDate, today} from "@internationalized/date";

// Простой календарь, показывающий дни текущего месяца
export default function Calendar() {
  const todayDate = toCalendarDate(today(getLocalTimeZone()))

  // Переключение на предыдущий месяц


  return (
    <div className="flex items-center p-4 min-h-[500px] outline">
      <Month todayDate={todayDate}/>
    </div>
  );
}