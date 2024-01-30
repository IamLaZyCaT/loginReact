import React from 'react';
import logo1 from '../../assets/logo-blue.png';
import Nav from '../Nav/Nav';
import './Index.scss';

const Index = () => {
  return (
    <>
    {/* navbar */}
        {/* <Navbar/> */}
        <Nav/>
        
        <div className="container">

            <img src={logo1} alt="logo1" />

            <div className="detail">
                <div className="welcome">Welcome to</div>
                <div className="aprodash">AphroDash</div>
                <div className="contain">Your All in One Enterprise Solution</div>
            </div>
           
        </div>
    </>

  )
}

export default Index