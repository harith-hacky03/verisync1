import React from 'react';

const Navbar = ({ sortByName, sortByUsername, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value); // Step 3: Call the search function on input change
  };

  return (
    <div className='shadow-md bg-white w-full'> 
      <div className='flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-5'>
        <div className='text-lg md:text-xl font-semibold'>Users</div>
        <div className='flex  md:flex-row items-center gap-3 md:gap-5 mt-3 md:mt-0'>
          <div className='border-2 border-gray-400 flex items-center gap-3 px-2 py-1 rounded-md w-full sm:w-[300px] md:w-[400px]'>
            <input 
              type="text"
              className='text-sm py-[12px]  w-full md:py-[2px] outline-none' 
              placeholder='Search by username or name' 
              onChange={handleChange}
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
          <button 
            onClick={sortByName} 
            className="px-3 py-2 bg-blue-600 text-sm text-white rounded hover:bg-blue-800"
          >
            Sort by Name
          </button>
          <button 
            onClick={sortByUsername} 
            className="px-3 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600"
          >
            Sort by Username
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
