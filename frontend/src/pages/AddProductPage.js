import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AddProductPanel from '../component/AddProduct/AddProduct';
import ButtonGreen from  '../component/comom/buttons/ButtonGreen';
import { postProduct } from '../services/ProductService';

function AddProductPage() {
    
    const handleFormSubmit = async (formData) => {
      try {
        await postProduct(formData);
        console.log(formData)
      } catch (error) {
        alert('Failed to add product.');
      }
    };

    const handleButtonClick = () => {
      handleFormSubmit();
    };

    return (
      <div>
            <AddProductPanel
              onSubmit={handleFormSubmit}
            ></AddProductPanel>
      </div>
            
            
    );
  }

export default AddProductPage;
