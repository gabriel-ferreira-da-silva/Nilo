import { useState, useRef, useEffect } from "react";
import ItemCard from '../comom/ItemCard/ItemCard.js';
import { useNavigate } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";
import style from './itemCardScroll.module.css'
import { loadMoreProducts, newObserver} from "./productListUtils.js";


export default function ItemCardScroll() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasEndingPosts, setHasEndingPosts] = useState(false);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const navigate = useNavigate();

  const usedHooks={
    loading,
    hasEndingPosts,
    setLoading,
    setProducts,
    currentPage,
    setHasEndingPosts
  };

  const handleDetailsClick = (productId)=>{
    navigate(`/product/details/${productId}`);
  };


  useEffect(() => {
    if (loading || hasEndingPosts) return;

    loadMoreProducts(usedHooks) 

  }, [currentPage]);

  
  useEffect(() => {
    if (loading || hasEndingPosts) return; 
    const observer = newObserver({loading,hasEndingPosts,setCurrentPage})
    if (loaderRef.current) { observer.observe(loaderRef.current);}
    return () => { if (loaderRef.current) { observer.unobserve(loaderRef.current); }};

  }, [loading, hasEndingPosts]); 


  return (
    <div>
      <div className={style.itemTable}>
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
      </div>

     
      {hasEndingPosts ? (
        <div className={style.allFetchedLabel}>All products are fetched</div>
      ) : (
        <div ref={loaderRef} className={style.loading}>
          <OrbitProgress color="#2367cd" size="medium" text="" textColor="" />
        </div>
        
      )}
    </div>
  );
}
