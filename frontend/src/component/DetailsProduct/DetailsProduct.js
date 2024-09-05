import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProduct } from '../../services/ProductService';


function DetailsProductPanel({productId}) {
  
        const [formData, setFormData] = useState({
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
        

        <div>
            <img src={formData.image_url} alt={formData.name} />
            <p> {formData.name}</p>
            <p> { formData.category}</p>
            <p> {formData.description}</p>
            <p> {"price " + formData.price}</p>
            <p> {formData.rate}</p>
        </div>
  );
}

export default DetailsProductPanel;
