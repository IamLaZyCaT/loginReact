import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/bg.jpg';
import logo1 from '../../assets/logo-white2.png';
import watermark from '../../assets/watermark.png';
import Navbar from '../Navbar/Navbar';
import './Login.scss';

const Login = () => {
  return (
    <>
        <Navbar/>
       
        <div className="log">
            <img src={bg} alt="" />

            <div className="contain">
                <div className="logo"><img src={logo1} alt="" /></div>
                <div className="login">Login</div>
                <form action="">
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="" id="" placeholder='' className='input' />
                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" placeholder='' className='input'/>
                        <div className="error">err</div>
                    </div>
                    <div className="forgot">
                        <div className="remem">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='please'>Please remember me</label>
                        </div>
                        <label htmlFor="">Forgot password ?</label>
                    </div>
                    <div className="btns">
                        <div className="btn">
                            <input type="checkbox" name="" id="" />
                            <span>Login me as Bussiness</span>
                        </div>
                        <div className="btn">
                            <input type="checkbox" name="" id="" />
                            <span>Login me as Client</span>
                        </div>
                    </div>
                    <div className="butt">
                        <button className='button' id='x'>LogIn</button>
                        <button className='button' id='y'>Sign up</button>
                        <div className="trouble">
                        Having trouble?<Link to="" className='link'> Contact us </Link>
                    </div>
                    </div>
                    
                </form>
                
            </div>
            <div className="waterMark">
                    <img src={watermark} alt="" />
                
                    <div className="detail">
                        <div className="head">
                            AphroDash
                        </div>
                        <div className="body">
                            A product of Aphrodite Bussiness pvt ltd.
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Login