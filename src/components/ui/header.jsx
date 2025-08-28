'use client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, useDisclosure, Button} from "@heroui/react";
import Image from "next/image";
import {siteConfig} from "@/config/site.config";
import {useUserStore} from "@/stores/useUserStore";
import UserMenu from "@/components/ui/user-menu/user-menu";
import {useEffect, useState} from "react";
import loginModal from "../common/modal/modal";
import LoginModal from "../common/modal/modal";
import AuthPage from "../../app/auth/page";
import {layoutConfig} from "../../config/layout.config";

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
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn)
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  useEffect(() => {
    setLoading(false)
  }, [])

  return (

    <header
      className={`flex w-full h-auto items-center justify-center min-h-[${layoutConfig.headerHeight}px] border-1`}>
      <nav className='flex w-full max-w-[1024px] items-center justify-between gap-4 px-4'>
        <div className='flex items-center gap-2'>
          <Link href='/'>
            <Logo/>
          </Link>
          <p className="font-bold text-inherit">{siteConfig.title}</p>

        </div>
        <div className='flex items-center'>
          {loading ? (
            <div className="hidden lg:flex">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : !isLoggedIn ? (
            <div className="lg:flex">
              <Button color='primary' onPress={onOpen}>
                Войти
              </Button>
            </div>
          ) : (
            <div className="lg:flex">
              <UserMenu/>
            </div>
          )}
        </div>
      </nav>
      <LoginModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <AuthPage/>
      </LoginModal>
    </header>
  );
}
