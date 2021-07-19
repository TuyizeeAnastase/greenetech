import React from 'react';
import './newProduct.css';

export default function NewProduct() {
    return (
        <div className="newProduct">
             <h1 className="newProductTitle">New Product</h1>
            <form action="" className="newProductForm">
                <div className="newProductUpload">
                    <label>image</label>
                    <input type="file" id="file"/>
                </div>
                <div className="newProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="green vehicle" />
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="250" />
                </div>
                <div className="newProductItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newProductSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newProductBtn">Create</button>
            </form>
        </div>
    )
}
