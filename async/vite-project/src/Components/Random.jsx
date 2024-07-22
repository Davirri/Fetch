import { useEffect, useState } from 'react';

const RandomUserGallery = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      setUsers(data.results);
    };

    fetchUsers();
  }, []);

  return (
    <div className="gallery">
      <h2 className='gallery-h2'>Random Users</h2>
      <div className="items">
        {users.map(({ picture, name, email }, index) => (
          <div key={index} className="item">
            <img src={picture.large} alt={`${name.first} ${name.last}`} />
            <h3>{name.first} {name.last}</h3>
            <p className='item-e'>{email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomUserGallery;
