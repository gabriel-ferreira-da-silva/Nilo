import React from 'react';
import { useParams } from 'react-router-dom';
import EditProductPanel from '../component/EditProduct/EditProduct';
import { deleteProduct, putProduct } from '../services/ProductService';
import Navbarheader from '../component/comom/header/Navbarheader';


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
      alert('Failed to delete product.');
    }
  };

  return (
    <div>
      <div>
        <Navbarheader></Navbarheader>
      </div>
      <div>
        <EditProductPanel
        productId={productId}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        >
        </EditProductPanel> 
      </div>
    </div>
    
  );
}

export default EditProductPage;
