import React from 'react';
import { useParams } from 'react-router-dom';
import EditProductPanel from '../component/EditProduct/EditProduct';
import Navbarheader from '../component/comom/header/Navbarheader';
import { handleDeleteProduct, handleEditProduct } from '../utils/EditProductUtils';


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
