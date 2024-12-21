import React, { useState, useEffect } from 'react';
//function UserProfile() {
const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile (replace with actual API)
    fetch('https://api.example.com/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user profile:', error));
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
