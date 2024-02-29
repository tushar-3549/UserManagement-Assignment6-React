import React from 'react';
import User from './User';
import style from './users.module.css'

const Users = ({ users }) => {
  
  if (!Array.isArray(users)) {
    return <div>No users available.</div>;
  }

  return (
    <section className={style.users}>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </section>
  );
};

export default Users;
