
import { fetchProductsBatch } from "../../services/ProductService";

export async function fetchNewProducts ({setProducts,currentPage,setHasEndingPosts}){
    const newProducts = await fetchProductsBatch(currentPage, 3);
    setProducts((oldProducts) => [...oldProducts, ...newProducts]); 
    if(newProducts.length <3){
        setHasEndingPosts(true)
    }
}

export async function loadMoreProducts ({loading,hasEndingPosts, setLoading, setProducts,currentPage, setHasEndingPosts}){
    await new Promise(resolve => setTimeout(resolve, 1200)); 
    if (loading || hasEndingPosts) return; 

    setLoading(true);
    await fetchNewProducts({setProducts,currentPage, setHasEndingPosts})
    setLoading(false);
  };

export function newObserver({loading, hasEndingPosts, setCurrentPage}){
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
    
    return observer;
}
