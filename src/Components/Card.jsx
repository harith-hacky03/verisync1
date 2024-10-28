import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md bg-white rounded-lg w-80 h-60 flex flex-col justify-between p-4 group">
      <div className="text-gray-500 flex justify-between text-sm overflow-hidden text-ellipsis whitespace-nowrap">
        <span className='cursor-pointer'>{user.website}</span>
      </div>
      <hr className="my-2" />
      <div className="text-lg font-semibold text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap">
        {user.name}
      </div>
      <div className="overflow-hidden py-1 text-ellipsis whitespace-nowrap">
        {user.username}
      </div>
      <div className="overflow-hidden py-1 text-sm flex text-ellipsis whitespace-nowrap">
        <img 
          width={20} 
          alt='email-icon' 
          src='https://img.icons8.com/?size=100&id=53435&format=png&color=000000' 
        />
        <div className='px-3'>{user.email}</div>
      </div>
      <div className='flex items-center py-1 overflow-hidden text-ellipsis whitespace-nowrap'>
        <img 
          width={20} 
          alt='location-icon' 
          src='https://img.icons8.com/?size=100&id=53426&format=png&color=000000' 
        />
        <div className='text-sm px-3'>{user.company.name}</div>
      </div>
      <div className='flex items-center py-1 overflow-hidden text-ellipsis whitespace-nowrap'>
        <img 
          width={25} 
          alt='location-icon' 
          src='https://img.icons8.com/?size=100&id=85353&format=png&color=000000' 
        />
        <div className='text-sm px-2'>{user.address.city}</div>
      </div>
      <div className="absolute inset-0 flex left-[60%] top-2 w-[80%] h-8 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button className="bg-blue-600 text-sm text-white rounded-lg px-4  transform transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
