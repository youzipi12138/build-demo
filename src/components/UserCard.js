import React from 'react';
import './UserCard.css';

function UserCard({ name, email, role }) {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {name.charAt(0)}
      </div>
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
        <span className="user-role">{role}</span>
      </div>
    </div>
  );
}

export default UserCard;

