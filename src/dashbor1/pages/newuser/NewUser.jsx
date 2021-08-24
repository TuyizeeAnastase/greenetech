import React from 'react';
import './newUser.css';
import axios from 'axios';

class NewUser extends React.Component{
    constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeSerial=this.onChangeSerial.bind(this);
        this.onChangeAdress=this.onChangeAdress.bind(this);
        this.onChangeAmount=this.onChangeAmount.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeStatus=this.onChangeStatus.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            name:'',
            username:'',
            phone:'',
            serialNumber:'',
            adress:'',
            amount:'',
            email:'',
            status:''
        }
    }
    onChangeName(e){
        this.setState({name:e.target.value})
    }
    onChangeUsername(e){
        this.setState({username:e.target.value})
    }
    onChangePhone(e){
        this.setState({phone:e.target.value})
    }
    onChangeSerial(e){
        this.setState({serialNumber:e.target.value})
    }
    onChangeAdress(e){
        this.setState({adress:e.target.value})
    }
    onChangeAmount(e){
        this.setState({amount:e.target.value})
    }
    onChangeEmail(e){
        this.setState({email:e.target.value})
    }
    onChangeStatus(e){
        this.setState({status:e.target.value})
    }
    onSubmit(e){
        e.preventdefault()

        const object={
            name:this.state.name,
            username:this.state.username,
            phone:this.state.phone,
            serialNumber:this.state.serialNumber,
            adress:this.state.adress,
            amount:this.state.amount,
            email:this.state.email,
            status:this.state.status,
        };
        axios.post('https://greenetech.herokuapp.com/api/v1/users/new',object)
        .then((res)=>{
            console.log(res.data)
            alert('New User Added')
        }).catch((error)=>{
            console.log(error)
        });
        this.setState({name:'',username:'',phone:'',serialNumber:'',adress:'',amount:'',email:'',status:''})
    }
    render(){
        return(
           <div className="newUser">
                <h1 className="newUserTitle" style={{marginLeft:'25rem',marginTop:'6rem',fontSize:'20px',fontWeight:'300'}}>New User</h1>
                <form action="" onSubmit={this.onSubmit} className="newUserForm">
                    <div className="leftForm">
                    <div className="newUserUpload" style={{marginLeft:'25rem',marginBottom:'2rem'}}>
                        <label>image</label>
                        <input type="file" id="file"/>
                    </div>
                    <div className="newUserItem">
                        <label>username</label>
                        <input type="text" value={this.state.username} onChange={this.onChangeUsername} placeholder="Enter username" />
                    </div>
                    <div className="newUserItem">
                        <label>FullName</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeName}placeholder="Enter Your FullName" />
                    </div>
                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="enter valid email" />
                    </div>
                    <div className="newUserItem">
                        <label>Serial Number</label>
                        <input type="text" value={this.state.serialNumber} onChange={this.onChangeSerial} placeholder="Enter Car Serial Number" />
                    </div>
                    </div>
                    <div className="rightForm" style={{marginTop:'4rem',marginLeft:'-8rem'}}>
                    <div className="newUserItem">
                        <label>Adress</label>
                        <input type="text" value={this.state.adress} onChange={this.onChangeAdress} placeholder="Enter yur Address" />
                    </div>
                    <div className="newUserItem">
                        <label>Status</label>
                        <input type="text" value={this.state.status} onChange={this.onChangeStatus} placeholder="Enter Status" />
                    </div>
                    <div className="newUserItem">
                        <label>Phone</label>
                        <input type="text" value={this.state.phone} onChange={this.onChangePhone} placeholder="Enter Phone number" />
                    </div>
                    <div className="newUserItem">
                        <label>Amount</label>
                        <input type="text" value={this.state.amount} onChange={this.onChangeAmount} placeholder="Enter Amount" />
                    </div>
                    </div>
                    
                    <button type="submit" className="newUserBtn">Create</button>
                </form>
           </div>
        )
    }
}

export default NewUser;
