import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllProducts } from '../services/ProductService';
import ItemCard from '../component/comom/ItemCard/ItemCard'
import Navbarheader from '../component/comom/header/Navbarheader';

const ProductListPage = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDetailsClick = (productId) => {
    navigate(`/product/details/${productId}`);
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const productsData = await fetchAllProducts();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product');
        setLoading(false);
      }
    };

    getAllProducts();
  }, [1]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div>
        <Navbarheader></Navbarheader>
      </div>
      <div className="product-list">
          {products.map((product,index)=>(
            <ItemCard
            key={index}
            title={product.name }
            description={product.description}
            price={product.price}
            imageUrl={product.image_url}
            handleClick = {() => handleDetailsClick(product.id)}
          />
        ))}
        
      </div>
    </div>
  );
}

export default ProductListPage;
