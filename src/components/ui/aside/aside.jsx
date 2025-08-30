'use client';

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {siteConfig} from "../../../config/site.config";

export default function Aside() {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <aside
      className={`
          bg-gray-700 text-white w-64 flex flex-col gap-2
          fixed top-0 left-0 h-full z-40 transition-transform
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:w-64
        `}
      aria-label="Навигация дашборда"
    >
      <button
        className="md:hidden p-2 text-white hover:bg-blue-700 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Переключить боковую панель"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}/>
        </svg>
      </button>
      <nav className="flex flex-col">
        {siteConfig.dashboardItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`
                p-2 rounded- text-white
                ${pathname === item.href ? 'bg-blue-700' : 'hover:bg-blue-700'}
              `}
            aria-label={`Перейти к ${item.label}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}