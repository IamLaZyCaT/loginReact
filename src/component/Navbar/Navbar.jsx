import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-white.png';
import './Navbar.scss';

const Navbar = () => {
  const navigate =useNavigate();
  const navi=useNavigate();
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
    {/* navbar */}
       <div className="navbar">

        {/* logo */}
        <div className="logo">
            <Link to={navi('/')}><img src={logo} alt="" /><span>AphroDash</span></Link>
        </div>
        {/* logo end */}

        {/* navigation list */}
        <ul className="nav-list">

          <div className="links" id='links'>
            <li><Link to="" className='link'>Home</Link></li>
            <li><Link to="" className='link'>About Us</Link></li>
            <li><Link to="" className='link'>Contact Us</Link></li> 
          </div>
           
            <div className="link1">
            <li><Link to={navigate('/login')} className='link2'><i class="fa-regular fa-user"></i></Link></li>
            <li><Link to="" className='link2'><i class="fa-solid fa-cart-shopping"></i></Link></li>
            </div>
        </ul>
        {/* navigation list end*/}
       </div>

      {/* burger menu */}
       <div className="burger">
              <div type="button" id="burgermenu" onClick={myClick} >
                <i class="fa-solid fa-bars"></i>
              </div>
        </div>
        {/* burger menu end */}
    </>
  )
}


export default Navbar