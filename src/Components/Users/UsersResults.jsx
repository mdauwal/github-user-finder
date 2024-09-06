import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { Link } from 'react-router-dom';

const UsersResults = () => {
  const [loading, setLoading] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_GITHUB_URL, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });

        const data = await res.json();
        console.log(data);

        
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className='container'>
  <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols -3 md:grid-cols-2'>
    {users.length > 0 ? (
      users.map((user) => (
        <div key={user.id} className="user-card text-center">
          <h2 className="text-lg font-semibold">{user.login}</h2>
          <img 
            src={user.avatar_url} 
            alt={user.login} 
            className="avatar w-24 h-24 object-cover rounded-full mx-auto" 
          />
          <link 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className='btn btn-outline btn-ghost mt-2 ml-20'
          >
            View Profile
          </link>
        </div>
      ))
    ) : (
      <p>No users found, please try again later.</p>
    )}
  </div>
</div>

  );
};

export default UsersResults;
