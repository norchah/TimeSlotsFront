'use client';
import Link from "next/link";
import {siteConfig} from "@/config/site.config";
import {usePathname} from "next/navigation";
import MiddlePosition from "../components/common/middlePosition/middle";


export default function Home() {
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
    <>
      <ul className='flex justify-center items-center gap-5'>
        {getNavItems()}
      </ul>
      <MiddlePosition>
        <h1 className='text-7xl'>Hi, yopta</h1>
        <p className='text-5xl'>This is the MAIN page</p>
      </MiddlePosition>
    </>
  );
}
