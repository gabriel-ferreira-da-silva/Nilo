import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProduct } from '../../services/ProductService';
import { useNavigate } from 'react-router-dom';
import styles from './DetailsProduct.module.css';
import { getUser } from '../../utils/AuthUtils';
import { fetchCartByUserCurrent, postCart } from '../../services/CartService';
import { postItem } from '../../services/ItemService';
function DetailsProductPanel({productId}) {
    const navigate = useNavigate();
    const [user,setUser] = useState(getUser())

    const goToEditPage= (productId) => {
        navigate(`/product/edit/${productId}`);
    };

    const AddToChart=(productId)=>{
        let response =  fetchCartByUserCurrent(user.id);
        if(response==[]){
            response = postCart(user.id)
        }
        console.log(response.date_created)
        console.log(postItem(user.id, response.date_created, productId))
    }

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
                (<button type="button" onClick= {() => AddToChart(formData.id)} className={styles.panelLeftButton}>
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
