import React from 'react';
import Navbarheader from '../component/comom/header/Navbarheader';
import ItemCardScroll from '../component/ProductList/ItemCardScroll';

const ProductListPage = () => {
 
  return (
    <div>
      <div>
        <Navbarheader></Navbarheader>
      </div>
      
      <ItemCardScroll
      ></ItemCardScroll>

    </div>
  );
}

export default ProductListPage;
