import React from 'react'
import './product.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Chart from '../../components/charts/Chart';
import { productData } from '../../../dummyData';
import { Publish } from '@material-ui/icons';

export default class NewProduct extends React.Component{
    constructor(props){
        super(props)
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangePrice=this.onChangePrice.bind(this);
        this.onChangeStock=this.onChangeStock.bind(this);
        this.onChangeStatus=this.onChangeStatus.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            title:'',
            price:'',
            stock:'',
            status:''
        }
    }
    onChangeTitle(e){
        this.setState({title:e.target.value})
    }
    onChangePrice(e){
        this.setState({price:e.target.value})
    }
    onChangeStock(e){
        this.setState({stock:e.target.value})
    }
    onChangeStatus(e){
        this.setState({status:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const id=this.props.match.params.productId
        const userObject={
            title:this.state.title,
            price:this.state.price,
            stock:this.state.stock,
            status:this.state.status
        };
        axios.patch(`http://localhost:5000/api/v1/products/${id}`,userObject)
             .then((res)=>{
                 console.log(res.data)
             }).catch((error)=>{
                 console.log(error)
             });
             this.setState({title:'',price:'',stock:'',status:''})
    }
    render(){
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
                    <form action="" onSubmit={this.onSubmit} className="productForm">
                        <div className="productFormLeft">
                          <label>Product Name</label>
                            <input type="text" value={this.state.title} onChange={this.onChangeTitle}  placeholder="Green Vehicle"/>
                          <label>In Stock</label> 
                            <input type="text" value={this.state.stock} onChange={this.onChangeStock}   placeholder="34"/>
                          <label>Status</label> 
                            <input type="text" value={this.state.status} onChange={this.onChangeStatus}   placeholder="active/Inactive"/>
                          <label>Price</label> 
                            <input type="text" value={this.state.price} onChange={this.onChangePrice}   placeholder="5678"/>
                        </div>
                        <div className="productFormRight">
                          <div className="productUpload">
                              <img src="https://images.pexels.com/photos/6325060/pexels-photo-6325060.jpeg?cs=srgb&dl=pexels-igor-6325060.jpg&fm=jpg" alt="" className="productImgUpload" />
                              <label for="file">
                                  <Publish />
                              </label>
                              <input type="file" id="file" style={{display:'none'}} />
                          </div>
                          <button type="submit"  className="productButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
