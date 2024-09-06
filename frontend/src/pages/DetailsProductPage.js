import React from 'react';
import DetailsProductPanel from '../component/DetailsProduct/DetailsProduct';
import { useParams } from 'react-router-dom';

function DetailsProductPage() {
  const {productId} = useParams()
  return (
    <DetailsProductPanel
      productId={productId}
    ></DetailsProductPanel>
  );
}

export default DetailsProductPage;
