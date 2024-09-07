import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProduct } from '../../services/ProductService';
import { useNavigate } from 'react-router-dom';
import styles from './DetailsProduct.module.css';

function DetailsProductPanel({productId}) {
    const navigate = useNavigate();

    const goToEditPage= (productId) => {
        navigate(`/product/edit/${productId}`);
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
            <button type="button" onClick= {() => goToEditPage(formData.id)} className={styles.panelLeftButton}>
                edit
            </button>

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
