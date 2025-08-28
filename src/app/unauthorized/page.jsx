'use client';

import {useSearchParams} from "next/navigation";
import {useUserStore} from "../../stores/useUserStore";
import {useEffect} from "react";
import LinkMain from "../../components/ui/links/link.main";
import MiddlePosition from "../../components/common/middlePosition/middle";

export default function Page() {
  const searchParams = useSearchParams();
  const clearUser = useUserStore(state => state.clearUser);

  useEffect(() => {
    const reason = searchParams.get('reason');
    if (reason === "no-token") {
      clearUser()
    }
  }, [searchParams, clearUser])

  return (
    <MiddlePosition>
      <div className='flex flex-col items-center justify-between'>
        <h1 className='text-7xl'>Нет прав</h1>
        <p>У вас нет прав на просмотр этой страницы залогинься.</p>
        <p>или вернись на <LinkMain/></p>
      </div>
    </MiddlePosition>
  )
}