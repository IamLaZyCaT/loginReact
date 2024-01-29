import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../../assets/bg.jpg';
import logo1 from '../../assets/logo-white2.png';
import watermark from '../../assets/watermark.png';
import Navbar from '../Navbar/Navbar';
import './Login.scss';

const Login = () => {
    const navigate=useNavigate();

    const [fname,setFname]=useState('');
    const [password,setPassword]=useState("");
    const [error,setError]=useState({});
    // const logone=()=>{
    //     const newError={};
    //     if(fname.trim===''){
    //         newError['fname']="name cannot be empty";
    //     }
    //     else{
    //         if(password.trim===''){
    //             newError['password']="password cannot be empty";
    //         }
    //         else{

    //         }
    //     }
        
    // }

   


  return (
    <>
        <Navbar/>
       
        <div className="log">

            {/* background img */}
            <img src={bg} alt="" />

            {/* form start */}
            <div className="contain">
                {/* logo in form */}
                <div className="logo">
                    <img src={logo1} alt="" />
                    <span>AphroDash</span>
                    </div>
                {/* login heading */}
                <div className="login">Login</div>

                <form action="">
                    {/* name form*/}
                    <label htmlFor="">Full Name</label>
                    <input type="text" 
                    name="" 
                    id="fname" 
                    placeholder='' 
                    className='input' 
                    value={fname}
                    onChange={(e)=>{setFname(e.target.value)}}/>

                    {/* password form */}
                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        name="" 
                        id="password" 
                        placeholder='' 
                        className='input'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />

                        {/* password error */}
                        <div className="error">err</div>
                    </div>

                    {/* remember and forgot password */}
                    <div className="forgot">
                        <div className="remem">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='please'>Please remember me</label>
                        </div>
                        <label htmlFor=""><button className='btn'>Forgot password ?</button></label>
                    </div>

{/* buttons for as bussiness or client */}
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
                        <button className='button' id='x' onClick={()=>{logone()}}>LogIn</button>
                        <button className='button' id='y' onClick={()=>{navigate('/signup')}} >Sign up</button>
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