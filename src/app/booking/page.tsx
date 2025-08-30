import React from 'react';
import LinkMain from "@/components/ui/links/link.main";
import Calendar from "@/components/common/calendar/calendar"
import Section from "@/components/ui/layout/section";


export default function BookingPage() {
  return (
    <>
      <h1 className='text-4xl sm:text-7xl self-center pb-20'>Записаться</h1>
      <Calendar/>
    </>
  );
};
