import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../../assets/bg.jpg';
import logo1 from '../../assets/logo-white2.png';
import watermark from '../../assets/watermark.png';
import Navbar from '../Navbar/Navbar';
import './Signup.scss';

const Signup = () => {
    const navigate = useNavigate();
  return (
    <>
        <Navbar/>

        <div className="sign">
            {/* background image */}
            <img src={bg} alt="" />

{/* form start */}
            <div className="contain">
                {/* form logo*/}
                <div className="logo">
                    <img src={logo1} alt="" />
                    <span>AproDash</span>
                </div>

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
                            <div className="error" id='ferror'></div>
                        </div>

                        {/* for phone */}
                        <div className="phone">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="" id="" className='input'/>

                            {/* for phone erroe */}
                            <div className="error" id='perror'></div>
                        </div>
                    </div>

{/* form password */}
                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" placeholder='' className='input'/>

                        {/* Show password error */}
                        <div className="error" id='paserror'></div>
                    </div>

                    {/*form for password confirm */}
                    <div className="pass pass1">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="" id="" placeholder='' className='input'/>

                        {/* show error in confirm password */}
                        <div className="error" id='pasCerror'></div>
                    </div>

                    {/* remember and forgot password */}
                    <div className="forgot">
                        <div className="remem">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='please'>Please remember me</label>
                        </div>
                        <label htmlFor=""><button className='btn'>Read term and condition</button></label>
                    </div>

                 {/* buttons for as bussiness or client  */}
                    <div className="btnsa">
                        {/* for bussiness */}
                        <input type="radio" name="login" id="bussiness" />
                        <label htmlFor="bussiness">Login me as Bussiness</label>
                        {/* for client */}
                        <input type="radio" name="login" id="client" />
                        <label htmlFor="client">Login me as Client</label>
                        
                    </div>

                     {/* buttons for log in and sign up */}
                    <div className="butt">
                        <button className='button' id='x'>Sign up</button>
                        <button className='button' id='y' onClick={()=>{navigate('/login')}}>LogIn</button>
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

export default Signup