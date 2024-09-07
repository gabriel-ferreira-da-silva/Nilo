import { useState, useRef, useEffect } from "react";
import { fetchProductsBatch } from "../../services/ProductService";
import ItemCard from '../comom/ItemCard/ItemCard.js';
import { useNavigate } from "react-router-dom";
import { fetchProductInfo } from "../../services/InfoService.js";

export default function ItemCardScroll() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasEndingPosts, setHasEndingPosts] = useState(false);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const navigate = useNavigate();

  const handleDetailsClick = (productId) => {
    navigate(`/product/details/${productId}`);
  };

  const loadMoreProducts = async () => {
    await new Promise(resolve => setTimeout(resolve, 1200)); 

    if (loading || hasEndingPosts) return; 

    setLoading(true);
    
    const newProducts = await fetchProductsBatch(currentPage, 3);
    setProducts((oldProducts) => [...oldProducts, ...newProducts]); 

    if (newProducts.length < 3) {
      setHasEndingPosts(true);
    }

    setLoading(false);
  };

  
  useEffect(() => {
    if (!loading && !hasEndingPosts) {
      loadMoreProducts();
    }
  }, [currentPage]);

  
  useEffect(() => {
    if (loading || hasEndingPosts) return; 

    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading && !hasEndingPosts) {
        setCurrentPage((oldPage) => oldPage + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current); 
      }
    };
  }, [loading, hasEndingPosts]); 


  return (
    <div>
      {products.map((product) => (
        <ItemCard
          key={product.id}
          title={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.image_url}
          handleClick={() => handleDetailsClick(product.id)}
        />
      ))}

     
      {hasEndingPosts ? (
        <div>All products presented</div>
      ) : (
        <div ref={loaderRef}>Loading more products...</div>
      )}
    </div>
  );
}
