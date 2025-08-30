import React from 'react';
import {layoutConfig} from "@/config/layout.config";

export default function SectionWrap({children, className=''}) {
  return (
    <section className={`flex flex-col justify-start items-center w-full w-max-[1024px] mx-auto h-full outline ${className}`}
    style={{ maxWidth: `${layoutConfig.widthContent}px` }}
    >
      {children}
    </section>
  );
}