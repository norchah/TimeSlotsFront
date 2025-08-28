import React from 'react';
import CalendarDayButton from "../../ui/buttons/button.calendar.day";

export default function CalendarBody(props) {
  return props.weeksOfMonth.map((week, weekIndex) =>
    week.map((date, dayIndex) => {
      const isCurrentMonth = date.month === props.currentDate.month;
      return (
        <CalendarDayButton
          key={`${weekIndex}-${dayIndex}`}
          className={`
                  ${isCurrentMonth ? 'bg-gray-800' : 'bg-gray-700 text-gray-400'}
                `}
          onClick={props.onClick}
        >
          {date.day}
        </CalendarDayButton>
      );
    })
  )
}