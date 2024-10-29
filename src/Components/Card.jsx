import React, { useState } from 'react';
import Modal from './Modal'; // Ensure to import the Modal component

const getColorForLetter = (letter) => {
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];
  const charCode = letter.charCodeAt(0);
  return colors[charCode % colors.length];
};

const Card = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md bg-white rounded-lg w-80 h-60 flex flex-col justify-between p-4 group">
        <div className="flex items-center space-x-3">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold ${getColorForLetter(user.name[0])}`}>
            {user.name[0]}
          </div>
          <div className="text-lg font-semibold text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap">
            {user.name}
          </div>
        </div>
        <hr className="my-2" />
        <div className="text-gray-500 flex justify-between text-sm overflow-hidden text-ellipsis whitespace-nowrap">
          <span className='cursor-pointer'>{user.website}</span>
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

        {/* Full Card Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-blue-600 bg-opacity-90 text-white text-lg font-semibold rounded-lg transition-opacity duration-300 group-hover:opacity-100">
          <button 
            onClick={handleOpenModal} 
            className="w-full h-full flex items-center justify-center"
          >
            View Details
          </button>
        </div>
      </div>
      
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} user={user} />
    </>
  );
};

export default Card;
