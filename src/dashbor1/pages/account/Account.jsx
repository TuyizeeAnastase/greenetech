import axios from 'axios';
import React,{useState} from 'react';
import './account.css';

const Account=(props)=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [role,setRole]=useState("");
    const [password,setPassword]=useState("");
    const [passwordConfirm,setconfirmP]=useState("");

    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);

    const handleSignUp=()=>{
          setError(null);
          setLoading(true);
          axios
           .post("https://greenetech.herokuapp.com/api/v1/auth/signUp",
           {
               name:name,
               email:email,
               role:role,
               password:password,
               passwordConfirm:passwordConfirm
           }
           )
           .then((res)=>{
               setLoading(false);
               props.history.push("/dashbord/users")
           })
           .catch((error)=>{
               setLoading(false);
               if (error.response.status === 401 || error.response.status === 400) {
                setError(error.response.data.message);
              } else {
                setError("Something went wrong.Please try again");
              }
              console.log("error >>> ", error);
           })
    }

    return(
        <div className="account">
             <h1 className="newAccountTitle">New Account</h1>
                <form action=""  className="newAccountForm">
                    <div className="newAccountUpload">
                        <label>image</label>
                        <input type="file" id="file"/>
                    </div>
                    <div className="newAccountItem">
                        <label>Name</label>
                        <input type="text" 
                         value={name}
                         onChange={(e)=>setName(e.target.value)}
                         placeholder="Enter username" />
                    </div>
                    <div className="newAccountItem">
                        <label>Email</label>
                        <input type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                          placeholder="Enter email" />
                    </div>
                    <div className="newAccountItem">
                        <label>Role</label>
                        <input type="text" 
                         value={role}
                         onChange={(e)=>setRole(e.target.value)}
                         placeholder="Enter user Role" />
                    </div>
                    <div className="newAccountItem">
                        <label>Password</label>
                        <input type="password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                         placeholder="Enter password" />
                    </div>
                    <div className="newAccountItem">
                        <label>Confirm Password</label>
                        <input type="password" 
                        value={passwordConfirm}
                        onChange={(e)=>setconfirmP(e.target.value)}
                         placeholder="Confirm password" />
                    </div>
                    <br/>
                    {error && <div className="error">{error}</div>}
                    <input type="button"
                    value={loading ? "Loading...":"SignUp"} 
                    onClick={handleSignUp}
                    disabled={loading}
                    className="newAccountBtn"/>
                </form>
        </div>
    )
}

export default Account;