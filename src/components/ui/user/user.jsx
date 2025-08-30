export function LoggedUser({name, username, image}) {
  return (
    <div className='w-35 h-12 flex animate-pulse gap-2'>
      <div className='rounded-[50%] bg-gray-700 w-13 border-1 border-white'></div>
      <div className='pt-3 flex flex-col gap-2'>
        <div className='w-16 h-2 bg-gray-700 rounded-[10px]'></div>
        <div className='w-14 h-2 bg-gray-700 rounded-[10px]'></div>
      </div>
    </div>
  );
}

export function SkeletonUser() {
  return (
    <div className='w-35 h-12 flex animate-pulse gap-1'>
      <div className='rounded-[50%] bg-gray-700 w-12 border-1 border-white'></div>
      <div className='pt-3 flex flex-col gap-2.5'>
        <div className='w-20 h-2 bg-gray-700 rounded-[10px]'></div>
        <div className='w-14 h-2 bg-gray-700 rounded-[10px]'></div>
      </div>
    </div>
  );
}
