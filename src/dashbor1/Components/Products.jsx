import React,{Component} from 'react';
import './style.css';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';


class Products extends Component{
    render(){
        return(
            <div className="product">
                        <div className="card">
                            <div className="card-header">
                                <h3>Recent Products</h3>
                                <Link to="/dashbord/products"><button>See all <span className="las la-arrow-right"></span></button></Link>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                <table >
                                    <thead>
                                        <tr>
                                            <td>Products Title</td>
                                            <td>Products Price</td>
                                            <td>Products in Stock</td>
                                            <td>Status</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tBody>
                                        <tr>
                                            <td>Green Vehicle</td>
                                            <td>67000rwf</td>
                                            <td>56</td>
                                            <td><span className="status purple">wonning</span></td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>egg Incubator</td>
                                            <td>50000rwf</td>
                                            <td>56</td>
                                            <td><span className="status pink">Active</span></td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Green Vehicle</td>
                                            <td>67000rwf</td>
                                            <td>56</td>
                                            <td><span className="status orange">Active</span></td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Green Vehicle</td>
                                            <td>67000rwf</td>
                                            <td>56</td>
                                            <td><span className="status orange">Inactive</span></td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Green Vehicle</td>
                                            <td>67000rwf</td>
                                            <td>56</td>
                                            <td><span className="status orange">Active</span></td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Green Vehicle</td>
                                            <td>67000rwf</td>
                                            <td>56</td>
                                            <td><span className="status orange">Inactive</span></td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                    </tBody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Products;