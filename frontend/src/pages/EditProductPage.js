import React from 'react';
import { useParams } from 'react-router-dom';
import EditProductPanel from '../component/EditProduct/EditProduct';
import { deleteProduct, putProduct } from '../services/ProductService';
import Navbarheader from '../component/comom/header/Navbarheader';


function EditProductPage() {

  const { productId } = useParams();
  
  const handleEditProduct = async (productId, formData, setAlert) => {
    try {
      await putProduct(productId, formData);
      setAlert({
        message:"product edited succesfully!",
        class:"alert alert-primary"
      })
    } catch (error) {
      setAlert({
        message:"failed to edit product",
        class:"alert alert-danger"
      })
    }
  };

  const handleDeleteProduct = async (productId, setAlert) => {
    try {
      await deleteProduct(productId);
      setAlert({
        message:"product deleted succesfully!",
        class:"alert alert-primary"
      })
    } catch (error) {
      setAlert({
        message:"failed to delete product",
        class:"alert alert-danger"
      })
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
