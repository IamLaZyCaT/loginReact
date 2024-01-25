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
            {/* background image */}
            <img src={bg} alt="" />

{/* form start */}
            <div className="contain">
                {/* form logo*/}
                <div className="logo"><img src={logo1} alt="" /></div>

                {/* heading */}
                <div className="login">Sign Up</div>
                <form action="">

                   {/* Name and phone form */}
                    <div className="name">

                        {/* for name */}
                        <div className="fName">
                            <label htmlFor="">Full Name</label>
                            <input type="text" name="" id="" className='input'/>

                            {/* for name error */}
                            <div className="error"></div>
                        </div>

                        {/* for phone */}
                        <div className="phone">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="" id="" className='input'/>

                            {/* for phone erroe */}
                            <div className="error"></div>
                        </div>
                    </div>

{/* form password */}
                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" placeholder='' className='input'/>

                        {/* Show password error */}
                        <div className="error"></div>
                    </div>

                    {/*form for password confirm */}
                    <div className="pass pass1">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="" id="" placeholder='' className='input'/>

                        {/* show error in confirm password */}
                        <div className="error"></div>
                    </div>

                    {/* remember and forgot password */}
                    <div className="forgot">
                        <div className="remem">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='please'>Please remember me</label>
                        </div>
                        <label htmlFor="">Read term and condition</label>
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
                        <button className='button' id='x'>Sign up</button>
                        <button className='button' id='y'>LogIn</button>
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

export default Sign
