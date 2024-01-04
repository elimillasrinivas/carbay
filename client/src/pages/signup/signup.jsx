import { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlemobileNumberChange = (e) => {
        setmobileNumber(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        
        const emailRegex = /^\S+@\S+\.\S+$/;
        const isEmailValid = emailRegex.test(email);

       
        const ismobileNumberValid = /^\d{10}$/.test(mobileNumber);

     
        const isPasswordValid = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password);

        if (isEmailValid && ismobileNumberValid && isPasswordValid) {

            try {
                await axios.post("https://server-carzbay.onrender.com/api/auth/signup",{
                email, mobileNumber, userName, password
                })
            } catch (error) {
                console.log(error);
            }
          
            alert('Signup successful!');
            navigate("/")
        } else {
            
            alert('Please fill all the details correctly.');
        }
    };

    return (
        <div className="login-con">
            <h1>Sign up</h1>
            <div className='login-section'>
                <div className='phoneemail'>
                    <label>Email</label>
                    <input
                        placeholder='Enter Email'
                        className='phonenumberinput'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className='phoneemail'>
                    <label>User Name</label>
                    <input
                        placeholder='Enter Name'
                        className='phonenumberinput'
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                </div>
                <div className='phone-section'>
                    <label>Phone number</label>
                    <div className='input-container'>
                        <span className='country-code'>+91</span>
                        <input
                            placeholder='Phone number'
                            className='phonenumber'
                            value={mobileNumber}
                            onChange={handlemobileNumberChange}
                        />
                    </div>
                </div>
                <div className='password'>
                    <label>Password</label>
                    <input
                        placeholder='Enter your Password'
                        type='password'
                        className='passwordinput'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className='login-button'>
                    <p onClick={()=>{navigate('/login')}}>Already have an account?</p>
                    <button className='button' onClick={handleSignUp}>
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
