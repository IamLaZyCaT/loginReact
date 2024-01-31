import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-white.png';
import './Nav.scss';


const Nav = () => {
    const navigate=useNavigate();

    const myClick=()=>{
        var x = document.getElementById("navbar-toogle");
         if (x.style.display === "block") {
                x.style.display = "none";
            }
        else {
            x.style.display = "block";
            }
    }
  return (
    <>
    {/* navbar */}
        <div className="navbar">
            {/* logo */}
            <div className="nav-brand">
                <Link to={navigate('/')} className='logo'>
                    <img src={logo} alt="" id="logo"/>
                    <label htmlFor="logo">AproDash</label>
                </Link>
            </div>
            {/* logo end*/}

            {/* nav-list for big screen */}
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact us</a></li>
                <li><Link to={navigate('/login')}><i class="fa-regular fa-user"></i></Link></li>
                <li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
               
            </ul>

{/* nav-list for small screen */}
            <div className='toogle'>
                <ul>
                <div type="button" id="burgermenu" className='button' onClick={myClick}>
                        <i class="fa-solid fa-bars"></i>
                 </div>
                 <li><Link to={navigate('/login')}><i class="fa-regular fa-user"></i></Link></li>
                <li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
            </div>
        </div>
        {/* nav-list for small toggle screen */}
        <div className="navbar-toogle" id='navbar-toogle'>
            <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact us</a></li>
            </ul>
           
        </div>
    </>
  )
}

export default Nav