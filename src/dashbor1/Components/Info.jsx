import React,{Component} from 'react';
import './style.css';

class Info extends Component{
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }
    
    componentWillUnmount(){
        fetch('https://greenetech.herokuapp.com/api/v1/products/')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                ...this.state,
                data:res.data.product
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className="cards">
                    <div className="card-single">
                        <div>
                            <h2>54</h2>
                            <span>Customers</span>
                        </div>
                        <div>
                           <span className="las la-users"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h2>74</h2>
                            <span>Products</span>
                        </div>
                        <div>
                           <span className="las la-clipboard"></span>
                           </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h2>124</h2>
                            <span>Orders</span>
                        </div>
                        <div>
                           <span className="las la-shopping-bag"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h2>$6k</h2>
                            <span>Income</span>
                        </div>
                        <div>
                           <span className="la la-google-wallet"></span>
                        </div>   
                    </div>
                </div>
        )
    }
}

export default Info;