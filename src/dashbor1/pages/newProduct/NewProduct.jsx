import axios from 'axios';
import React from 'react';
import './newProduct.css';

class NewProduct extends React.Component {
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

        const object={
            title:this.state.title,
            price:this.state.price,
            stock:this.state.stock,
            status:this.state.status
        };
        axios.post('https://greenetech.herokuapp.com/api/v1/products/new',object)
          .then((res)=>{
              console.log(res.data)
              alert('New Product Added')
          }).catch((error)=>{
              console.log(error)
          });
          this.setState({title:'',price:'',stock:'',status:''})
    }
    render(){
        return(
            <div className="newProduct">
                 <h1 className="newProductTitle">New Product</h1>
                <form action="" onSubmit={this.onSubmit} className="newProductForm">
                    <div className="newProductUpload">
                        <label>image</label>
                        <input type="file" id="file"/>
                    </div>
                    <div className="newProductItem">
                        <label>Name</label>
                        <input type="text" value={this.state.title} onChange={this.onChangeTitle} placeholder="green vehicle" />
                    </div>
                    <div className="newProductItem">
                        <label>Stock</label>
                        <input type="text" value={this.state.stock} onChange={this.onChangeStock}  placeholder="250" />
                    </div>
                    <div className="newProductItem">
                        <label>Price</label>
                        <input type="text" value={this.state.price} onChange={this.onChangePrice} placeholder="250$" />
                    </div>
                    <div className="newProductItem">
                        <label>status</label>
                        <input type="text" value={this.state.status} onChange={this.onChangeStatus} placeholder="active/inactive" />
                    </div>
                    <button type="submit" className="newProductBtn">Create</button>
                </form>
            </div>
        )
    }  
}

export default NewProduct;