import React from 'react';
import { useState } from 'react';
import style from './AddProduct.module.css'
import AlertCommom from '../comom/alert/AlertCommom';

function AddProductPanel({onSubmit}) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        image_url: '',
        rate: '',
        price:''
    });

    const [alert, setAlert] = useState({
      message:'',
      class:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(formData, setAlert);
    };

    return (
          <div>
            <AlertCommom
            alertHook={alert}
            ></AlertCommom>

            <form onSubmit={handleSubmit} className={style.editForm}>
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
              <button type="submit" className={style.buttonSubmit}>
                    Submit
                </button>
            </form>
          </div>
            
  );
}

export default AddProductPanel;

