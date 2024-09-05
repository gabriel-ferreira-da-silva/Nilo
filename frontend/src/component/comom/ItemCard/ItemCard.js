import React from 'react';
import './ItemCard.css';

function Card({ title, price, imageUrl, handleClick}) {
  return (
    <div className="card" onClick={handleClick}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
}

export default Card;
