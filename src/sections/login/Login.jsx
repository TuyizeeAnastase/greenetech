import React, { useState } from "react";
import "./login.css";
import logo from "../../images/logo2.png";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://greenetech.herokuapp.com/api/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        if(res.data.role==='admin'){
           localStorage.setItem('token', res.data.Token)
           localStorage.setItem('user', res.data.name)
           localStorage.setItem('email', res.data.email)
           localStorage.setItem("isAuthenticated", "true");
           props.history.push("/dashbord");
           console.log(res.data);
        }
        else{
          localStorage.setItem('token', res.data.Token)
           localStorage.setItem('user', res.data.name)
           localStorage.setItem('email', res.data.email)
           localStorage.setItem("isAuthenticated", "true");
          props.history.push("/userDashbord")
          console.log(res.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong.Please try again");
        }
        console.log("error >>> ", error);
      });
    console.log(email, password);
  };

  

  return (
    <div className="body">
      <div class="container-Login">
        <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-14 col-md-12 login-box">
            <div
              class="col-lg-12 login-key"
              style={{ marginBottom: "6rem", backgroundColor: "black" }}
            >
              <img
                src={logo}
                alt=""
                style={{ width: "14rem", height: "14rem" }}
              />
            </div>
            <div class="col-lg-12 login-title">User Login</div>
            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    <label class="form-control-label">email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <br />
                  {error && <div className="error">{error}</div>}
                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-6 login-btm login-button">
                      <input
                        type="button"
                        value={loading ? "Loading..." : "Login"}
                        onClick={handleLogin}
                        disabled={loading}
                        class="btn btn-outline-primary"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
