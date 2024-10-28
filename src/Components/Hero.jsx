import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Navbar from './Navbar';
import './Hero.css';

const Hero = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Step 1: State for search input

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        setSortedData(response.data); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const sortByName = () => {
    const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setSortedData(sorted);
  };

  const sortByUsername = () => {
    const sorted = [...data].sort((a, b) => a.username.localeCompare(b.username));
    setSortedData(sorted);
  };

  // Step 2: Function to filter data based on search input
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredData = data.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase()) ||
      user.username.toLowerCase().includes(term.toLowerCase())
    );
    setSortedData(filteredData); // Update displayed data
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <Navbar 
        sortByName={sortByName} 
        sortByUsername={sortByUsername} 
        onSearch={handleSearch} // Pass search function to Navbar
      />
      <div className="mx-auto px-4 py-8">
        <div className="grid-container">
          {sortedData.map(user => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
