import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Navbar from './Navbar';
import './Hero.css'

const Hero = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

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

  return (
    <div className="rounded-lg overflow-hidden shadow-md"> {/* Add rounded corners and shadow */}
      <Navbar sortByName={sortByName} sortByUsername={sortByUsername} />
      <div className="mx-2 px-4 py-8">
        <div className="grid-container"> {/* Responsive grid definition */}
          {sortedData.map(user => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
