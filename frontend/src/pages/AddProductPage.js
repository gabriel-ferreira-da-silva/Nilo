import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AddProductPanel from '../component/AddProduct/AddProduct';
import ButtonGreen from  '../component/comom/buttons/ButtonGreen';
import { postProduct } from '../services/ProductService';
import Navbarheader from '../component/comom/header/Navbarheader';

function AddProductPage() {
    
    const handleFormSubmit = async (formData,setAlert) => {
      try {
        await postProduct(formData);
        console.log(formData);
        setAlert({
          message: 'Product added successfully!',
          class: 'alert alert-primary',
        });
      } catch (error) {
        setAlert({
          message: 'Failed to add product.',
          class: 'alert alert-danger',
        });
      }
    };


    return (
      <div>
          <div>
            <Navbarheader></Navbarheader>
          </div>
            <AddProductPanel
              onSubmit={handleFormSubmit}
            ></AddProductPanel>
      </div>
            
            
    );
  }

export default AddProductPage;
