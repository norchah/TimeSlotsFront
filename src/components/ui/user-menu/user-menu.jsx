import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@heroui/react";
import useLogout from "@/hooks/useLogout";
import {useUserStore} from "@/stores/useUserStore";
import {useRouter} from "next/navigation";

export default function UserMenu() {
  const handleLogout = useLogout()
  const username = useUserStore((state) => state.username)
  const router = useRouter()

  const handleCreateTimeSlots = () => {
    router.push('/crm')
  }

  const handleRedirectBooking = () => {
    router.push('/booking')
  }

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start" className='bg-gray-800'>
        <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              }}
              className="transition-transform cursor-pointer"
              description={username}
              name={username}
            />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="system" onClick={handleCreateTimeSlots}>Создать</DropdownItem>
          <DropdownItem key="configurations" onClick={handleRedirectBooking}>Записаться</DropdownItem>
          <DropdownItem key="help_and_feedback">Резерв</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout}>
            Выйти
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
