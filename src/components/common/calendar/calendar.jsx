'use client';

import Month from "@/components/common/calendar/month";
import {getLocalTimeZone, toCalendarDate, today} from "@internationalized/date";

export default function Calendar() {
  const todayDate = toCalendarDate(today(getLocalTimeZone()))

  return (
      <Month todayDate={todayDate}/>
  );
}