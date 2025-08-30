import Aside from "../../components/ui/aside/aside";

export const metadata = {
  title: 'Создание слотов',
  description: 'Создайте слоты времени для приема клиентов',
};

export default function TimeSlotLayout({ children }) {


  return (
    <div className="flex w-full h-full">
      {/* Боковая панель */}
      <Aside/>
      {/* Основной контент */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}