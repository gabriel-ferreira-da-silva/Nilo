import React from 'react';
import './ItemCard.css';

function ItemCard({ title, price, imageUrl, description, handleClick}) {
  return (
    <div className="card" onClick={handleClick}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-price">{"$"+price}</h2>
      </div>

      <div className="card-description-holder">
        <h2 className="card-description">{description.substring(0,50) +"..."}</h2>
      </div>
    </div>
  );
}

export default ItemCard;
