
import React from 'react';
import style from './user.module.css';

const User = ({ user }) => {
  const { image: avatar, username, firstName: first_name, lastName: last_name, email, address, company } = user;

  return (
    <article className={style.article}>
      <div>
        <img src={avatar} alt="Avatar" className={style.avatar} />
      </div>
      <div className={style.details}>
        <p style={{fontWeight: "bold"}}>Username: {username}</p>
        {/* <p><strong>Username:</strong> {username}</p> */}
        <p>First Name: {first_name}</p>
        <p>Last Name: {last_name}</p>
        <p>Email: {email}</p>
        <p>
          Address: {address.address}
        </p>
        <p>Company Name: {company.name}</p>
      </div>
    </article>
  );
};

export default User;

