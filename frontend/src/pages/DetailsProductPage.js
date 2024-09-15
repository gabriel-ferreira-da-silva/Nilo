import React from 'react';
import DetailsProductPanel from '../component/DetailsProduct/DetailsProduct';
import { useParams } from 'react-router-dom';
import Navbarheader from '../component/comom/header/Navbarheader';
import { Carrousel, ItemCarrousel } from '../component/comom/carrousel/Carrousel';


function DetailsProductPage() {
  const {productId} = useParams();
  return (
    <div>
      <div>
        <Navbarheader></Navbarheader>
      </div>
      <div>
          <DetailsProductPanel
          productId={productId}
        ></DetailsProductPanel>
      </div>
      <div>
        <ItemCarrousel>
          
        </ItemCarrousel>
      </div>
    </div>
    
  );
}

export default DetailsProductPage;
