import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Navigation/Nav';
import Users from './UsersList/Users';

const url = "https://dummyjson.com/users";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [initialUsers, setInitialUsers] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to Fetch Data');
      }
      const data = await response.json();
      setUsers(data.users);
      setInitialUsers(data.users);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = initialUsers.filter(user => user.username.toLowerCase().includes(searchTerm));
    setUsers(filteredUsers);
  };


  const handleSort = (event) => {
    const sortBy = event.target.value;
  
    // Create a copy of the current users array to avoid mutating state directly
    const sortedUsers = [...users];
  
    // Sort the users array based on the selected criteria
    sortedUsers.sort((a, b) => {
      if (sortBy === 'name') {
        return a.firstName.localeCompare(b.firstName);
      } else if (sortBy === 'email') {
        return a.email.localeCompare(b.email);
      } else if (sortBy === 'company') {
        return a.company.name.localeCompare(b.company.name);
      }
      return 0; // Default case
    });
  
    // Update the users state with the sorted array
    setUsers(sortedUsers);
  };
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>User Management System</h1>
      <Navigation handleSearch={handleSearch} handleSort={handleSort} />
      <Users users={users} />
    </>
  );
}

export default App;
