import React from 'react';

export default function MiddlePosition({children, className=''}) {
  return (
    <section className={`flex flex-col justify-center mx-auto h-full ${className}`}>
      {children}
    </section>
  );
}