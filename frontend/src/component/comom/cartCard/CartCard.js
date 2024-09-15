import React from "react";
import styles from './CartCard.module.css'

function CartCard({product}){
    return(
        <div className={styles.cartHolder}>
            <div >
                <img className={styles.cartImage} src={product.image_url}></img>
            </div>
            <div className={styles.cartInfo}>
                <div className={styles.cartTitle}>
                    {product.name}
                </div>
                <div className={styles.cartPrice}>
                    {"$"+product.price}
                </div>
                <div className={styles.cartDescription}>
                    {product.description}
                </div>
            </div>
        </div>
    )
}

export default CartCard;