import React from 'react';
import './Card.css';

export const Card = ({ children, width, height }) => {
  return (
    <div className="card-outer-container" style={{width, height }}>
      {children}
    </div >
  );
};
