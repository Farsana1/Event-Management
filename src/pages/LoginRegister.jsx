import React, { useState } from 'react'
import './Loginregister.css';

const Loginregister =()=>{
    const [action,setAction ]=useState('');
    const registerLink=()=>{
        setAction(' active');
    }
    const loginLink=()=>{
        setAction('');
    }
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
    
    return(
        <div style={universalStyles}>
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required/>
                    </div>
                    
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required/>
                    </div>
                   
                    <div className='remember-forgot'>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account?<a href='#' onClick={registerLink}>Register</a></p>

                    </div>

                </form>
            </div>

            <div className="form-box register" >
                <form action="">
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required/>
                    </div>
                    <div className='input-box'>
                        <input type="email" placeholder='Email' required/>
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Organization name' required/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='ConfirmPassword' required/>
                    </div>
                    <div className='remember-forgot'>
                    </div>

                    <button type='submit'>Register</button>
                    <div className='register-link'>
                        <p>Already have an account ?<a href='#' onClick={loginLink}>Login</a></p>

                    </div>

                </form>
            </div>

        </div>
        </div>
    )
}
  

export default Loginregister