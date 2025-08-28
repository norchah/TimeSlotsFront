import {
  startOfWeek,
  startOfMonth,
  getWeeksInMonth
} from "@internationalized/date";
import {calendarConfig} from "@/config/calendar.config";

export function getWeeksOfMonth(date, locale = 'ru-RU') {
  const firstDayOfMonth = startOfMonth(date);
  const weeksCount = getWeeksInMonth(date, locale);
  const firstWeekStart = startOfWeek(firstDayOfMonth, locale);

  const weeks = [];
  for (let i = 0; i < weeksCount; i++) {
    const weekStart = firstWeekStart.add({weeks: i});
    const week = Array.from({length: 7}, (_, j) => weekStart.add({days: j}));
    weeks.push(week);
  }
  return weeks;
}

export function getCurrentMonth(currentDate) {
  return calendarConfig.months.find(d => d.numberMonth === currentDate.month)?.label_ru || '';
}

export function getNextMonth(currentDate) {
  let numberNextMonth = currentDate.month + 1
  if (numberNextMonth === 13) {
    numberNextMonth = 1
  }
  return calendarConfig.months.find(d => d.numberMonth === numberNextMonth)?.label_ru || '';
}

export function getPrevMonth(currentDate) {
  let numberNextMonth = currentDate.month - 1
  if (numberNextMonth === 0) {
    numberNextMonth = 12
  }
  return calendarConfig.months.find(d => d.numberMonth === numberNextMonth)?.label_ru || '';
}



