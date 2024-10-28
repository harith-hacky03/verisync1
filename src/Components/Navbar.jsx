import React from 'react';

const Navbar = () => {
  return (
    <div className='shadow-md'>
      <div className='flex justify-between px-5 md:px-10 py-5'>
        <div className='text-lg md:text-xl font-semibold '>Users</div>
        <div className='flex items-center gap-3'>
          <div className='border-2 border-gray-400 flex items-center gap-3 px-2 py-1 rounded-md w-[250px] sm:w-[300px] md:w-[400px]'>
            <input 
              className='text-sm w-full outline-none' 
              placeholder='Search by username or name' 
            />
            <div className='px-1'>
              <img 
                width={20} 
                alt='search-icon' 
                src='https://img.icons8.com/?size=100&id=p8VkXMjDOpcE&format=png&color=000000' 
                className='cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
