const Card = ({ user }) => {
  return (
    <div className="shadow-md bg-white rounded-lg w-80 h-60 flex flex-col justify-between p-4"> {/* Fixed width and height */}
      <div className="text-gray-500 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
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
    </div>
  );
};

export default Card;
