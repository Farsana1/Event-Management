import React, { useState } from 'react';
import axios from 'axios';
import './LoginRegister.css';
import { serverUrl } from '../server';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Loginregister = ({setIsLogged}) => {

  
  const [action, setAction] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    organization: '',
    password: '',
    confirmPassword: '',
  });
  
  const navigate = useNavigate();
  const registerLink = () => {
    setAction(' active');
  
  };

  const loginLink = () => {
    setAction('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
  
    try {
      // Check if the user is already registered
      const response = await axios.get(
        `${serverUrl}/user?email=${formData.email}`
      );
  
      if (response.data.length > 0) {
        toast.warning('User with this email is already registered.');
        return;
      }
  
      // Register the new user
      const {username,email,organization,password}=formData
      const registerResponse = await axios.post(`${serverUrl}/user`, {username,email,organization,password
     
      });
      
      //console.log('Registration successful:', registerResponse.data);
      toast.success('Registration successful!');
      setFormData({
        username: '',
        email: '',
        organization: '',
        password: '',
        confirmPassword: '',
      });
      window.location.reload();
     
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Try again.');
    }
  };
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
        
      const response = await axios.get(
        `${serverUrl}/user?username=${formData.username}&password=${formData.password}`
      );
      
      
      if (response.data.length > 0) {
        //console.log('Login successful:', response.data);
        toast.error('Login successful!');
        
        setFormData({
            username:'',
            password:''
        })
       
        localStorage.setItem('username', formData.username);
        console.log(localStorage.getItem('username'));
        
        navigate('/home');
        setIsLogged(true)
      } else {
        toast.error('Invalid username or password.');
        setFormData({
            username:'',
            password:''
        })
       
      }
    } catch (error) {
      toast.error('Login failed:', error);
      alert('Login failed. Try again.');
    }
  };

  const universalStyles = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background:
      "url('https://thumbs.dreamstime.com/b/luxury-table-settings-fine-dining-glassware-beautiful-blurred-background-events-weddings-preparation-holiday-passover-139822025.jpg') no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={universalStyles}>
   
      <div className={`wrapper${action}`}>
        {/* Login Form */}
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="remember-forgot">
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?
                <a href="#" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Registration Form */}
        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
           
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="organization"
                placeholder="Organization name"
                value={formData.organization}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account?
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  );
};

export default Loginregister;
