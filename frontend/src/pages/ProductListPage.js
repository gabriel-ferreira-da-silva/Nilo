import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllProducts, fetchProductsBatch } from '../services/ProductService';
import ItemCard from '../component/comom/ItemCard/ItemCard'
import Navbarheader from '../component/comom/header/Navbarheader';
import InfiniteScroll from 'react-infinite-scroll-component';
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
