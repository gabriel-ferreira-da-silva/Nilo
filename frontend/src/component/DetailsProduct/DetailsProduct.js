import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProduct } from '../../services/ProductService';
import { useNavigate } from 'react-router-dom';

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
    

    <div>
        <img src={formData.image_url} alt={formData.name} />
        <p> {formData.name}</p>
        <p> { formData.category}</p>
        <p> {formData.description}</p>
        <p> {"price: " + formData.price}</p>
        <p> {formData.rate}</p>

        <button type="button" onClick= {() => goToEditPage(formData.id)} className="btn btn-danger">
            edit
        </button>
    </div>
  );
}

export default DetailsProductPanel;
