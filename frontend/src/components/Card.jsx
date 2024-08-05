import React from 'react';
import './Card.css';

export const Card = ({ children, width, height, minHeight }) => {
  return (
    <div className="card-outer-container shadow" style={{width, height, minHeight }}>
      {children}
    </div >
  );
};
