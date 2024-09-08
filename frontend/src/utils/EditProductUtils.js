import { fetchProduct,putProduct,deleteProduct } from "../services/ProductService";

export const handleChange = (e, formData, setFormData) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

export const handleEdit = async (e, productId, formData, onEdit, setAlert) => {
    e.preventDefault();
    await onEdit(productId, formData, setAlert);
};

export const handleDelete = async (e, productId, onDelete, setAlert) => {
    e.preventDefault();
    await onDelete(productId, setAlert);
};

export const getProduct = async ({productId,setFormData}) => {
    if(!productId) return;
    
    try {
        const response = await fetchProduct(productId);
        setFormData(response);
    } catch (error) {
        console.error("hey this is Failed to fetch product", error);
    }
};

export const handleEditProduct = async (productId, formData, setAlert) => {
    try {
      await putProduct(productId, formData);
      setAlert({
        message:"product edited succesfully!",
        class:"alert alert-primary"
      })
    } catch (error) {
      setAlert({
        message:"failed to edit product",
        class:"alert alert-danger"
      })
    }
  };

export const handleDeleteProduct = async (productId, setAlert) => {
    try {
      await deleteProduct(productId);
      setAlert({
        message:"product deleted succesfully!",
        class:"alert alert-primary"
      })
    } catch (error) {
      setAlert({
        message:"failed to delete product",
        class:"alert alert-danger"
      })
    }
  };