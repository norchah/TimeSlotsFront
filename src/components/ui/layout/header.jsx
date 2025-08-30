'use client';
import {Link, useDisclosure, Button} from "@heroui/react";
import Image from "next/image";
import {siteConfig} from "@/config/site.config";
import {useUserStore} from "@/stores/useUserStore";
import UserMenu from "@/components/ui/user-menu/user-menu";
import {useEffect, useState} from "react";
import LoginModal from "../../common/modal/modal";
import AuthPage from "../../../app/auth/page";
import {layoutConfig} from "../../../config/layout.config";
import ButtonBase from "../buttons/button.base";
import {LoggedUser, SkeletonUser} from "../user/user";

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
      className='flex w-full items-center justify-center border-b-1 border-b-gray-700'
      style={{
        minHeight: `${layoutConfig.headerHeight}px`,
      }}
    >
      <nav className='flex w-full items-center justify-between gap-4 px-4'
           style={{ maxWidth: `${layoutConfig.widthContent}px`}}
      >
        <Link href='/' className='flex items-center gap-2 font-bold text-inherit'>
          <Logo/>
          {siteConfig.title}
        </Link>
        <div className='flex items-center'>
          {loading ? (
            <SkeletonUser/>
          ) : !isLoggedIn ? (
            <ButtonBase onClick={onOpen}>
              Войти
            </ButtonBase>
          ) : (
            <UserMenu/>
          )}
        </div>
      </nav>
      <LoginModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <AuthPage onClose={onClose}/>
      </LoginModal>
    </header>
  );
}
