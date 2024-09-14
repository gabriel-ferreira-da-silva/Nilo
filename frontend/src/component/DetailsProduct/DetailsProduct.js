import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProduct } from '../../services/ProductService';
import { useNavigate } from 'react-router-dom';
import styles from './DetailsProduct.module.css';
import { getUser } from '../../utils/AuthUtils';
import { postCart,fetchCartCurrent } from '../../services/CartService';
import { postItem } from '../../services/ItemService';
function DetailsProductPanel({productId}) {
    const navigate = useNavigate();
    const [user,setUser] = useState(getUser())

    const goToEditPage= (productId) => {
        navigate(`/product/edit/${productId}`);
    };

    const AddToCart = async (productId) => {
        try {
            let responseCart = await fetchCartCurrent( user.id);
            if(!responseCart){
                console.log("creaeting cart")
                responseCart = await postCart(user.id);
            }

            console.log(responseCart.date_created)

            const date = new Date(responseCart.date_created);
            
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');

            
            const cart_date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            console.log(cart_date)
            
            const result = await postItem(productId, user.id,cart_date)
            console.log(result)
        
        } catch (error) {
          console.error('Error adding item to cart:', error);
        }
      };
      
      

    const [formData, setFormData] = useState({
        id:'',
        name: '',
        description: '',
        category: '',
        image_url: '',
        rate: '',
        price: ''
    });

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetchProduct(productId);
                setFormData(response);
                console.log("this is my data" + formData.name)
            } catch (error) {
                console.error("hey this is Failed to fetch product", error);
            }
        };

        if (productId) {
            getProduct(productId);
        }
    }, [productId]);


return (
    

    <div className={styles.panel}>
        <div className={styles.panelLeft}>
            <img  className={styles.panelLeftImg} src={formData.image_url} alt={formData.name} />
            
            {
                (user.role=="admin")
                ?
                (<button type="button" onClick= {() => goToEditPage(formData.id)} className={styles.panelLeftButton}>
                    edit
                </button>):
                (<button type="button" onClick= {() => AddToCart(formData.id)} className={styles.panelLeftButton}>
                    add to cart
                </button>)
            }

            

        </div>

        <div className={styles.panelRightInfo}>
            <p className={styles.name}> {formData.name}</p>
            <p className={styles.category}> { formData.category}</p>
            <p className={styles.description}> {formData.description}</p>
            <div className={styles.priceInfo}>
                <div className={styles.price}> {"R$ "+formData.price}</div>
                <div className={styles.rate}> {formData.rate+'/5'}</div>
            </div>
            
        </div>

        
    </div>
  );
}

export default DetailsProductPanel;
