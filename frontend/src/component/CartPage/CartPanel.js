import React, { useEffect, useState } from "react";
import { fetchCartCurrent } from "../../services/CartService";
import { getUser } from "../../utils/AuthUtils";
import { fetchItemsByCart } from "../../services/ItemService";
import { formatDate } from "../../utils/commomUtils";
import { fetchProduct } from "../../services/ProductService";

function CartPanel() {
  const [user, setUser] = useState(getUser()); 
  const [cart, setCart] = useState(""); 
  const [items, setItems] = useState([]); 
  const [products, setProducts] = useState([]); 
    
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetchCartCurrent(getUser().id);
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
      <p>Cart ID: {cart.id_user}</p>
      <p>Date Created: {cart.date_created}</p>
      <p>Date Sold: {cart.date_sold ? cart.date_sold : "Not sold yet"}</p>
    
      <div>
        {products.map((item,index)=>(
          <div>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.image_url}</p>
          </div>
        ))}
      </div>
      <button> buy cart </button>
    </div>

  );
}

export default CartPanel;
