import React from 'react';
import ItemCard from './ItemCard';
import styles from './itemHolder.module.css'

function ItemHolder({products }) {
  return (
    <div className={styles.itemContainer}>
      {console.log("this is produ"+products)}
      {products.map((product, index) => (
        <ItemCard
          key={index}
          title={product.name}
          price={product.price}
          imageUrl={product.image_url}
          description={product.description}
          handleClick={console.log}
        />
      ))}
    </div>
  );
}

export default ItemHolder;
