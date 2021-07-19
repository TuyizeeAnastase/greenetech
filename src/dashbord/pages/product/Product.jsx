import React from 'react'
import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/charts/Chart';
import { productData } from '../../../dummyData';
import { Publish } from '@material-ui/icons';

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/dashbord/newProduct">
                   <button className="productAddBtn">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="sales" title="sales performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/6325060/pexels-photo-6325060.jpeg?cs=srgb&dl=pexels-igor-6325060.jpg&fm=jpg" alt="" className="productInfoImg" />
                        <span className="productName">Green Vehicle</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">4123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">23</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in Stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                      <label>Product Name</label>
                        <input type="text" placeholder="Green Vehicle"/>
                      <label>In Stock</label> 
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label> 
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                      <div className="productUpload">
                          <img src="https://images.pexels.com/photos/6325060/pexels-photo-6325060.jpeg?cs=srgb&dl=pexels-igor-6325060.jpg&fm=jpg" alt="" className="productImgUpload" />
                          <label for="file">
                              <Publish />
                          </label>
                          <input type="file" id="file" style={{display:'none'}} />
                      </div>
                      <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
