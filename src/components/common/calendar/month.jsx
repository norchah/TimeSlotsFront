'use client';

import {Button, Divider} from '@heroui/react';
import {
  getCurrentMonth,
  getNextMonth,
  getPrevMonth,
  getWeeksOfMonth
} from "@/components/common/calendar/render.calendar";
import {useState} from "react";
import CalendarBody from "@/components/common/calendar/calendar.body";


export default function Month({todayDate, onClick}) {
  // Создаём CalendarDate для первого дня месяца (месяцы начинаются с 1)
  const [currentDate, setCurrentDate] = useState(todayDate);
  // Получаем недели месяца
  const weeksOfMonth = getWeeksOfMonth(currentDate, 'ru-RU');

  // Название текущего месяца
  const monthCaption = getCurrentMonth(currentDate)

  // Названия следующего и предыдущего месяцев с учётом границ года
  const nextMonth = getNextMonth(currentDate)
  const prevMonth = getPrevMonth(currentDate)
  // Переключение на предыдущий месяц
  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract({months: 1}));
  };

  // Переключение на следующий месяц
  const handleNextMonth = () => {
    setCurrentDate(currentDate.add({months: 1}));
  };

  return (
    <section className="mx-auto h-[470px] max-w-[800px]">
      <div className="flex items-baseline justify-around gap-5">
        <Button onPress={handlePrevMonth} variant="bordered">
          {prevMonth}
        </Button>
        <h1 className="text-2xl font-bold mb-4">
          {monthCaption} {currentDate.year}
        </h1>
        <Button onPress={handleNextMonth} variant="bordered">
          {nextMonth}
        </Button>
      </div>
      <Divider className="bg-blue-500 h-0.5 mb-4"/>
      <div className="grid grid-cols-7 gap-2 text-center">
        <CalendarBody weeksOfMonth={weeksOfMonth} currentDate={currentDate} onClick={onClick} />
      </div>
    </section>
  );
}