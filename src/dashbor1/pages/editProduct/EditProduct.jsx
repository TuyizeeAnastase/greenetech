import React  from 'react';
import './editProduct.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditProduct extends React.Component{
    constructor(props){
        super(props)
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangePrice=this.onChangePrice.bind(this);
        this.onChangeStock=this.onChangeStock.bind(this);
        this.onChangeStatus=this.onChangeStatus.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            data:{},
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
        axios.patch(`https://greenetech.herokuapp.com/api/v1/products/${id}`,userObject)
             .then((res)=>{
                 console.log(res.data)
             }).catch((error)=>{
                 console.log(error)
             });
             this.setState({title:'',price:'',stock:'',status:''})
    }
  componentWillMount(){
    fetch(`https://greenetech.herokuapp.com/api/v1/products/${this.props.match.params.productId}`)
    .then(res=>res.json())
    .then(res=>{
        this.setState({
            ...this.state,
            data:res.data.Product
        })
    })
    .catch(err=>{
        console.log(err)
    })
  }
    render(){
        console.log(this.state.length)
        return(
            <div className="product">
                <div className="productTitleContainer">
                    <h5 className="productTitle">Product</h5>
                    <Link to="/dashbord/newProduct">
                       <button className="productAddBtn">Add Product</button>
                    </Link>
                </div>
                <div className="editProduct">
                            <div className="editLeft">
                        <div className="productInfoTop">
                               <img src="https://images.pexels.com/photos/6325060/pexels-photo-6325060.jpeg?cs=srgb&dl=pexels-igor-6325060.jpg&fm=jpg" alt="" className="productInfoImg" />
                               <span className="productName">{this.state.data.title}</span>
                           </div>
                           <div className="productInfoBottom">
                           <div className="productInfoItem">
                                   <span className="productInfoKey">Name:</span>
                                   <span className="productInfoValue">{this.state.data.title}</span>
                               </div>
                               <div className="productInfoItem">
                                   <span className="productInfoKey">Price:</span>
                                   <span className="productInfoValue">{this.state.data.price}</span>
                               </div>
                               <div className="productInfoItem">
                                   <span className="productInfoKey">Stock:</span>
                                   <span className="productInfoValue">{this.state.data.stock}</span>
                               </div>
                               <div className="productInfoItem">
                                   <span className="productInfoKey">Status:</span>
                                   <span className="productInfoValue">{this.state.data.status}</span>
                               </div>
                           </div>
                   </div>
                <div className="editRight">
                <form action="" onSubmit={this.onSubmit} className="editProductForm">
                    <div className="editProductItem">
                        <label>Name</label>
                        <input type="text" value={this.state.title} onChange={this.onChangeTitle}  placeholder={this.state.data.title} />
                    </div>
                    <div className="editProductItem">
                        <label>Stock</label>
                        <input type="text" value={this.state.stock} onChange={this.onChangeStock}  placeholder={this.state.data.stock} />
                    </div>
                    <div className="editProductItem">
                        <label>Price</label>
                        <input type="text" value={this.state.price} onChange={this.onChangePrice} placeholder={this.state.data.price} />
                    </div>
                    <div className="editProductItem">
                        <label>status</label>
                        <input type="text" value={this.state.status} onChange={this.onChangeStatus} placeholder={this.state.data.status} />
                    </div>
                    <button type="submit" className="editProductBtn">Submit</button>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
