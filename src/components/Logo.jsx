import React from 'react';
import './Logo.css'; // Optional CSS for logo styling

const Logo = () => {
  return (
    <div className='d-flex justify-content-center w-100' style={{height:'10vh'}}>
      <h1 className="logo-title">
        Event<span>ify</span>
      </h1>
    </div>
  );
};

export default Logo;
