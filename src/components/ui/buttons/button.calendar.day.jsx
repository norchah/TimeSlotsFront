import React from 'react';

export default function CalendarDayButton({children, className='', onClick}) {
  return (
    <button
      onClick={onClick}
      className={`p-3 border-1 rounded-[15px] hover:text-gray-500 hover:cursor-pointer transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
