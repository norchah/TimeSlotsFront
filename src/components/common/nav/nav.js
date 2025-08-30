'use client';
import React from 'react';
import Link from "next/link";
import {siteConfig} from "../../../config/site.config";
import {usePathname} from "next/navigation";

export default function NavSite(props) {
  const pathname = usePathname();
  const getNavItems = () => {
    return siteConfig.menuItems.map((item, i) => {
      const isActive = pathname === item.href
      return (
        <li key={item.href}>
          <Link href={item.href}
                color='foreground'
                className={`
            ${isActive ? 'text-blue-500' : 'text-foreground'}
            hover:text-blue-300 
            rounded-md transition-all text-2xl
            duration-200 px-3 py-1
            
            `}>
            {item.label}
          </Link>
        </li>
      )
    })
  }

  return (
    <nav className='pt-2'>
      <ul className='flex justify-center items-center gap-5'>
        {getNavItems()}
      </ul>
    </nav>
  );
}