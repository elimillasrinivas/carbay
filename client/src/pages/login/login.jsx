import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  // Local state variables for email/userEmailOrMobile and password
  const [userEmailOrMobile, setuserEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  // Event handlers to update state variables
  const handleUserDetailChange = (e) => {
    setuserEmailOrMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to dispatch the login action
  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          userEmailOrMobile,
          password,
        }
      );
      localStorage.setItem("token", loginResponse.data.token);
      if(loginResponse.data.user.role == 'admin'){
        navigate("/admin/dashboard");
      }
      else{
          navigate("/user/dashboard");
      }

    } catch (error) {
      alert(error.response.data.message)
    }

    setuserEmailOrMobile("");
    setPassword("");
  };

  return (
    <>
      <div className="login-con">
        <h1>Login</h1>
        <div className="login-section">
          <div className="phoneemail">
            <label>Enter email / mobile number</label>
            <input
              placeholder="Enter Email / Phone no"
              className="phonenumberinput"
              value={userEmailOrMobile}
              onChange={handleUserDetailChange}
            />
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="passwordinput"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="login-button">
            <p
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create new account ?
            </p>
            <button className="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
