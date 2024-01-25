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

            {/* background img */}
            <img src={bg} alt="" />

            {/* form start */}
            <div className="contain">
                {/* logo in form */}
                <div className="logo"><img src={logo1} alt="" /></div>
                {/* login heading */}
                <div className="login">Login</div>

                <form action="">
                    {/* name form*/}
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="" id="" placeholder='' className='input' />

                    {/* password form */}
                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" placeholder='' className='input'/>

                        {/* password error */}
                        <div className="error">err</div>
                    </div>

                    {/* remember and forgot password */}
                    <div className="forgot">
                        <div className="remem">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='please'>Please remember me</label>
                        </div>
                        <label htmlFor="">Forgot password ?</label>
                    </div>

                    {/* buttons for as bussiness or client */}
                    <div className="btns">
                        <div className="btn">
                            {/* for bussiness */}
                            <input type="checkbox" name="" id="" />
                            <span>Login me as Bussiness</span>
                        </div>
                        {/* for client */}
                        <div className="btn">
                            <input type="checkbox" name="" id="" />
                            <span>Login me as Client</span>
                        </div>
                    </div>
                    {/* buttons for log in and sign up */}
                    <div className="butt">
                        <button className='button' id='x'>LogIn</button>
                        <button className='button' id='y'>Sign up</button>
                        <div className="trouble">
                        Having trouble?<Link to="" className='link'> Contact us </Link>
                    </div>
                    </div>
                </form>
            </div>
            {/* form end */}

            {/* waterMark */}
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