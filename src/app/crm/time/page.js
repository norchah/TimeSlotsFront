import React from 'react';
import {getWeeksOfMonth} from "../../../components/common/calendar/render.calendar";
import {getLocalTimeZone, toCalendarDate, today} from "@internationalized/date";

export default function Page(props) {
  const todayDate = toCalendarDate(today(getLocalTimeZone()))
  const weekOfMonth = getWeeksOfMonth(todayDate)
  console.log(weekOfMonth.length)
  weekOfMonth.forEach((date) => {
    console.log(date.length)
    date.forEach(day => {
      console.log(day.day);
    })
  })

  return (
    <ul>{
      weekOfMonth.map(day => {
        const key = day.day + day.month + day.year;
        return (
          <li key={key}>
            <p>{day.year}</p>
            <p>{day.month}</p>
            <p>{day.day}</p>
          </li>)
      })
    }</ul>
  );
}