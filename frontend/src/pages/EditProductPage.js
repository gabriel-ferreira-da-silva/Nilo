import React from 'react';
import EditProductPanel from '../component/EditProduct/EditProduct';
import { postProduct, putProduct } from '../services/ProductService';

function EditProductPage() {
  
  const handleEditProduct = async (formData) => {
    try {
      await putProduct(formData);
      console.log(formData)
    } catch (error) {
      alert('Failed to add product.');
    }
  };

  const handleDeleteProduct = async (formData) => {
    try {
      await postProduct(formData);
      console.log(formData)
    } catch (error) {
      alert('Failed to add product.');
    }
  };

  return (
    <EditProductPanel
    productId={'1'}
    onEdit={handleEditProduct}
    onDelete={handleDeleteProduct}
    >

    </EditProductPanel>
  );
}

export default EditProductPage;
