import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="shadow-md py-4 px-6 bg-white rounded-lg max-w-sm w-full sm:max-w-md lg:max-w-lg">
        <div className="text-gray-500 text-sm sm:text-base overflow-hidden text-ellipsis whitespace-nowrap text-center sm:text-left">
          <span className='cursor-pointer'>{user.website}</span>
        </div>
        <hr className="my-2" />
        <div className="text-lg font-semibold text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap text-center sm:text-left">
          {user.name}
        </div>
        <div className="overflow-hidden py-1 text-ellipsis whitespace-nowrap text-center sm:text-left">
          {user.username}
        </div>
        <div className="overflow-hidden py-1 text-sm flex justify-center items-center sm:justify-start text-ellipsis whitespace-nowrap">
          <img 
            width={20} 
            alt='email-icon' 
            src='https://img.icons8.com/?size=100&id=53435&format=png&color=000000' 
          />
          <div className='px-3'>{user.email}</div>
        </div>
        <div className='flex items-center py-1 overflow-hidden text-ellipsis whitespace-nowrap justify-center sm:justify-start'>
          <img 
            width={20} 
            alt='location-icon' 
            src='https://img.icons8.com/?size=100&id=53426&format=png&color=000000' 
          />
          <div className='text-sm px-3'>{user.company.name}</div>
        </div>
        <div className='flex items-center py-1 overflow-hidden text-ellipsis whitespace-nowrap justify-center sm:justify-start'>
          <img 
            width={25} 
            alt='location-icon' 
            src='https://img.icons8.com/?size=100&id=85353&format=png&color=000000' 
          />
          <div className='text-sm px-2'>{user.address.city}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
