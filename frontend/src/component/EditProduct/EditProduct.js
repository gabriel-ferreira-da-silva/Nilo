import React from 'react';
import { useState,useEffect } from 'react';
import { fetchProduct } from '../../services/ProductService';
import style from './EditProduct.module.css'

function EditProductPanel({productId, onEdit, onDelete}) {
    
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrgu4a7W_OM8LmAuN7Prk8dzWXm7PVB_FmA&s',
        rate: '',
        price: ''
    });

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetchProduct(productId);
                setFormData(response);
                console.log("this is my data" + formData.name)
            } catch (error) {
                console.error("hey this is Failed to fetch product", error);
            }
        };

        if (productId) {
            getProduct(productId);
        }
    }, [productId]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        onEdit(productId, formData);
    };
    
    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(productId);
    };

    return (
          <div>
            <div class={style.imgHolder}>
              <img src={formData.image_url} className={style.formImg} alt={formData.name} />
            </div>
            <form onSubmit={handleEdit} className={style.EditForm}>
              <div class="form-group">
                <label for="titleInput">Product Title</label>
                <input class="form-control" id="titleInput" placeholder="title.." name="name" value={formData.name} onChange={handleChange} ></input>
              </div>
              <div class="form-group">
                <label for="titleInput">Image URL</label>
                <input class="form-control" id="titleInput" placeholder="url..." name="image_url" value={formData.image_url} onChange={handleChange}></input>    
              </div>
              <div class="form-group">
                <label for="descriptionInput">Description</label>
                <textarea class="form-control" id="descriptionInput" placeholder="product is..."rows="3" name="description" value={formData.description} onChange={handleChange}></textarea>
              </div>
              <div class="form-group">
                <label for="categoryInput">Category</label>
                <input class="form-control" id="categoryInput" placeholder="category" name="category" value={formData.category} onChange={handleChange}></input>    
              </div>
              <div class="form-group">
                <label for="priceInput">Price</label>
                <input class="form-control" id="priceInput" placeholder="0.0" name="price" value={formData.price} onChange={handleChange}></input>    
              </div>
              <div class="form-group">
                <label for="rateInput">Rate</label>
                <input class="form-control" id="rateInput" placeholder="0.0" name="rate" value={formData.rate} onChange={handleChange}></input>    
              </div>
            
              <div className={style.buttonHolder}>
                <button type="submit" className={style.buttonEdit}> Submit </button>
                <button type="button" className={style.buttonDelete} onClick={handleDelete}> delete</button>
              </div>
              
            </form>

          </div>
  );
}

export default EditProductPanel;

