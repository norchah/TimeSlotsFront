import React from 'react';
import LinkMain from "@/components/ui/links/link.main";
import MiddlePosition from "@/components/common/middlePosition/middle";
import Calendar from "@/components/common/calendar/calendar";

export default function BookingPage() {
  return (
    <MiddlePosition className="flex flex-col  gap-10 max-w-[1280px]">
      <h1 className='text-4xl sm:text-7xl self-center'>Записаться</h1>
      <LinkMain letter='big' className='text-2xl self-center'/>
      <Calendar/>
    </MiddlePosition>

  );
};
