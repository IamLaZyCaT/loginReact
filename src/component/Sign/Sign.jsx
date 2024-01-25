import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/bg.jpg';
import logo1 from '../../assets/logo-white2.png';
import watermark from '../../assets/watermark.png';
import Navbar from '../Navbar/Navbar';
import './Sign.scss';

const Sign = () => {
  return (
    <>
        <Navbar/>

        <div className="sign">
            <img src={bg} alt="" />

            <div className="contain">
                <div className="logo"><img src={logo1} alt="" /></div>
                <div className="login">Sign Up</div>
                <form action="">
                    {/* <label htmlFor="">Full Name</label>
                    <input type="text" name="" id="" placeholder='' className='input' /> */}
                    <div className="name">
                        <div className="fName">
                            <label htmlFor="">Full Name</label>
                            <input type="text" name="" id="" className='input'/>
                            <div className="error"></div>
                        </div>
                        <div className="phone">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="" id="" className='input'/>
                            <div className="error"></div>
                        </div>
                    </div>

                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" placeholder='' className='input'/>
                        <div className="error"></div>
                    </div>
                    <div className="pass pass1">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="" id="" placeholder='' className='input'/>
                        <div className="error"></div>
                    </div>
                    <div className="forgot">
                        <div className="remem">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='please'>Please remember me</label>
                        </div>
                        <label htmlFor="">Read term and condition</label>
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
                        <button className='button' id='x'>Sign up</button>
                        <button className='button' id='y'>LogIn</button>
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

export default Sign
