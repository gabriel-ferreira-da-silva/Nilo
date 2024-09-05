import React, { useEffect, useState } from 'react';
import { fetchAllProducts } from '../services/ProductService';
import ItemCard from '../component/comom/ItemCard/ItemCard'

const ProductListPage = ({ productId }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="product-list">
          {products.map((product,index)=>(
            <ItemCard
            key={index}
            title={product.name }
            description={product.description}
            price={product.price}
            imageUrl={product.image_url}
          />
        ))}
        
      </div>
    </div>
  );
}

export default ProductListPage;
