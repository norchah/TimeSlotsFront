'use client';gi
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@heroui/react";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {siteConfig} from "@/config/site.config";
import {useUserStore} from "@/stores/useUserStore";
import ButtonPrimary from "@/components/ui/buttons/Button.base";
import UserMenu from "@/components/ui/user-menu/user-menu";
import {useEffect, useState} from "react";

export const Logo = () => {
  return (
    <Image
      src="/logoTimeSlots.png"
      width={26}
      height={26}
      alt={`Logo ${siteConfig.title}`}
      priority
    />
  );
};

export default function Header({style}) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn)

  useEffect(() => {
    setLoading(false)
  }, [])


  const getNavItems = () => {
    return siteConfig.menuItems.map((item) => {
      const isActive = item.href === pathname;
      return (
        <NavbarItem key={item.href} isActive>
          <Link href={item.href}
                color='foreground'
                className={`
            ${isActive ? 'text-blue-500' : 'text-foreground'}
            border border-transparent
            hover:text-blue-300 hover:border hover:border-blue-300
            rounded-md transition-all
            duration-200 px-3 py-1
            `}>
            {item.label}
          </Link>
        </NavbarItem>
      )
    })
  }

  return (
    <Navbar style={style}>

      <NavbarBrand>
        <Link href='/' className='gap-1 text-white'>
          <Logo/>
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 border-content" justify="center">
        {getNavItems()}
      </NavbarContent>
      <NavbarContent justify="end">
        {loading ? (
          <NavbarItem className="hidden lg:flex">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
          </NavbarItem>
        ) : !isLoggedIn ? (
          <NavbarItem className="hidden lg:flex">
            <ButtonPrimary as={Link} href="/auth">
              Войти
            </ButtonPrimary>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <UserMenu />
          </NavbarItem>
        )}
      </NavbarContent>

    </Navbar>
  );
}
