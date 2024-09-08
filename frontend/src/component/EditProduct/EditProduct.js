import React from 'react';
import { useState,useEffect } from 'react';
import { getProduct } from '../../utils/EditProductUtils';
import style from './EditProduct.module.css'
import AlertCommom from '../comom/alert/AlertCommom';
import { emptyAlert,empytProduct } from '../../utils/commomUtils';

import { handleChange,handleDelete,handleEdit } from '../../utils/EditProductUtils';

function EditProductPanel({productId, onEdit, onDelete}) {
    const [alert, setAlert] = useState(emptyAlert)
    const [formData, setFormData] = useState(empytProduct);

    useEffect(() => {
        getProduct({productId, setFormData});
    }, [productId]);

    return (
          <div>
            <AlertCommom
              alertHook={alert}
            ></AlertCommom>

            <div class={style.imgHolder}>
              <img src={formData.image_url} className={style.formImg} alt={formData.name} />
            </div>
            <form onSubmit={handleEdit} className={style.EditForm}>
              <div class="form-group">
                <label for="titleInput">Product Title</label>
                <input class="form-control" id="titleInput" placeholder="title.." name="name" value={formData.name} onChange={(e) => handleChange(e, formData, setFormData)} ></input>
              </div>
              <div class="form-group">
                <label for="titleInput">Image URL</label>
                <input class="form-control" id="titleInput" placeholder="url..." name="image_url" value={formData.image_url} onChange={(e) => handleChange(e, formData, setFormData)}></input>    
              </div>
              <div class="form-group">
                <label for="descriptionInput">Description</label>
                <textarea class="form-control" id="descriptionInput" placeholder="product is..."rows="3" name="description" value={formData.description} onChange={(e) => handleChange(e, formData, setFormData)}></textarea>
              </div>
              <div class="form-group">
                <label for="categoryInput">Category</label>
                <input class="form-control" id="categoryInput" placeholder="category" name="category" value={formData.category} onChange={(e) => handleChange(e, formData, setFormData)}></input>    
              </div>
              <div class="form-group">
                <label for="priceInput">Price</label>
                <input class="form-control" id="priceInput" placeholder="0.0" name="price" value={formData.price} onChange={(e) => handleChange(e, formData, setFormData)}></input>    
              </div>
              <div class="form-group">
                <label for="rateInput">Rate</label>
                <input class="form-control" id="rateInput" placeholder="0.0" name="rate" value={formData.rate} onChange={(e) => handleChange(e, formData, setFormData)}></input>    
              </div>
            
              <div className={style.buttonHolder}>
                <button className={style.buttonEdit} onClick={(e) => handleEdit(e, productId, formData, onEdit, setAlert)}>Edit</button>
                <button className={style.buttonDelete }onClick={(e) => handleDelete(e, productId, onDelete, setAlert)}>Delete</button>
              </div>
              
            </form>

          </div>
  );
}

export default EditProductPanel;

