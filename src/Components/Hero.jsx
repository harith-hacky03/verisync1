import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Navbar from './Navbar';
import './Hero.css';

const Hero = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredData = data.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase()) ||
      user.username.toLowerCase().includes(term.toLowerCase())
    );
    setSortedData(filteredData);
  };

  return (
    <div className="hero-gradient">
      <Navbar 
        sortByName={sortByName} 
        sortByUsername={sortByUsername} 
        onSearch={handleSearch}
      />
      <div className="mx-auto px-8 py-8">
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
