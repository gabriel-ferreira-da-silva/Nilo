import React from 'react';
import Navbarheader from '../component/comom/header/Navbarheader';
import CartPanel from '../component/CartPage/CartPanel';

function CartPage() {
  return (
    <div>
      <div>
          <Navbarheader></Navbarheader>
      </div>
      <div>
          <CartPanel></CartPanel>
      </div>
    </div>
    
  );
}

export default CartPage;
