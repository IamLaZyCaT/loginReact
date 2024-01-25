import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.png';
import './Navbar.scss';

const Navbar = () => {
  const myClick =()=> {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <>
       <div className="navbar">
        <div className="logo">
            <Link to="#"><img src={logo} alt="" /><span>AphroDash</span></Link>
        </div>
        <ul className="nav-list">
          <div className="links" id='links'>
            <li><Link to="" className='link'>Home</Link></li>
            <li><Link to="" className='link'>About Us</Link></li>
            <li><Link to="" className='link'>Contact Us</Link></li>
          </div>
           
            <div className="link1">
            <li><Link to="" className='link2'><i class="fa-regular fa-user"></i></Link></li>
            <li><Link to="" className='link2'><i class="fa-solid fa-cart-shopping"></i></Link></li>
            </div>
            
            
        </ul>
        
       </div>
       <div className="burger">
              <div type="button" id="burgermenu" onClick={myClick} >
                <i class="fa-solid fa-bars"></i>
              </div>
        </div>
    </>
  )
}


export default Navbar