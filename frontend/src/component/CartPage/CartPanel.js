import React, { useEffect, useState } from "react";
import { fetchCartCurrent } from "../../services/CartService";
import { getUser } from "../../utils/AuthUtils";
import { fetchItemsByCart } from "../../services/ItemService";
import { formatDate } from "../../utils/commomUtils";
import { fetchProduct } from "../../services/ProductService";
import { putCartAsSold } from "../../services/CartService";
import CartCard from "../comom/cartCard/CartCard";
import styles from '../comom/cartCard/CartCard.module.css'

function CartPanel() {
  const [user, setUser] = useState(getUser()); 
  const [cart, setCart] = useState(""); 
  const [items, setItems] = useState([]); 
  const [products, setProducts] = useState([]); 

  const buyCart = async ()=>{
    try{
      const date = new Date();
      const response = await putCartAsSold(user.id, formatDate(cart.date_created),formatDate(date))
      console.log(response)
      window.location.reload()
    }catch(e){
      throw e;
    }
  }
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetchCartCurrent(user.id);
        setCart(response);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
  
    fetchCart();
  }, []);
  
  useEffect(() => {
    const fetchItemsInCart = async () => {
      if (cart) {  
        try {
          const cartDate = formatDate(cart.date_created);  
          console.log("Cart creation date:", cartDate);
          const response = await fetchItemsByCart(getUser().id, cartDate);
          setItems(response);
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      }
    };
  
    fetchItemsInCart();
  }, [cart]); 

  useEffect(() => {
    const fetchAllProducts = async () => {
      const productsPromises = items.map(item => fetchProduct(item.id));
      try {
        const products = await Promise.all(productsPromises);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (items.length > 0) {
      fetchAllProducts();
    }
  }, [items]);

  if (!cart) {
    return <p>Loading cart...</p>; 
  }

  return (
    <div>
      <div className={styles.panel}>
        <h1>Cart</h1>
        <div className={styles.cartId}>{cart.id_user +"-git "+cart.date_created}</div>
        {products.map((item,index)=>(
          <div key={index}>
            <CartCard
              product={item}
            ></CartCard>
          </div>
        ))}
        <button className={styles.button} onClick={()=> buyCart()}> buy cart </button>
      </div>
      
    </div>

  );
}

export default CartPanel;
