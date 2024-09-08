import React from 'react';
import { useParams } from 'react-router-dom';
import EditProductPanel from '../component/EditProduct/EditProduct';
import { deleteProduct, putProduct } from '../services/ProductService';
import Navbarheader from '../component/comom/header/Navbarheader';


function EditProductPage() {

  const { productId } = useParams();

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
