import React from 'react';
import { useParams } from 'react-router-dom';
import EditProductPanel from '../component/EditProduct/EditProduct';
import { deleteProduct, putProduct } from '../services/ProductService';

function EditProductPage() {

  const { productId } = useParams();
  
  const handleEditProduct = async (productId, formData) => {
    try {
      await putProduct(productId, formData);
    } catch (error) {
      alert('Failed to add product.');
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      alert('Failed to add product.');
    }
  };

  return (
    <EditProductPanel
    productId={productId}
    onEdit={handleEditProduct}
    onDelete={handleDeleteProduct}
    >

    </EditProductPanel>
  );
}

export default EditProductPage;
