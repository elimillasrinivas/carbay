import './header2.css'
import { useNavigate } from 'react-router-dom'
import logo1 from '../../assets/Images/logo-1.jpeg'
import { useState } from 'react';
import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';


const Headersub=(()=>{
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close menu when a menu item is clicked
  };
    return(
        <> 
            <div className='header-section-2'>
                   <div className='logo-section-2' onClick={()=>{navigate('/')}}>
                        <img src={logo1} alt='logo1'/>
                   </div>
                   <div className='nav-section-2'>
                        <div className='nav-sub-section-2'>
                          
                          <p>Tract&pay</p>
                        </div>
                        <div className='nav-sub-section-2' onClick={()=>{navigate('/blogs')}}>
                        
                          <p>Blogs</p>
                        </div>
                        <div className='nav-sub-section-2' onClick={()=>{navigate('/services')}}>
                         
                          <p>Services</p>
                        </div>
                        {/* <div className='nav-sub-section'>
                         
                          <p>Lubricants</p>
                        </div> */}
                        <div className='nav-sub-section-2' onClick={()=>{navigate('/insurance')}}>
                         
                          <p>Insurance claims</p>
                        </div>
                        <div className='login-button-2'>
                        <button onClick={()=>{navigate('/login')}}>Log in</button>
                        </div>
                       
                   </div>
            </div>
             <div className='mobile-view'>
            <div className='header-mobileview'>
              <div className='mobileview-logo' onClick={()=>{navigate('/')}}>
                <img src={logo1} alt='nogo' />
              </div>
              <div onClick={toggleMenu}>
              <MenuIcon style={{ fontSize : '40px',color:'#1E0C60',cursor:'pointer' }} />
              </div>
            </div>
            <div className={isMenuOpen ? 'menu-list' : 'menu-list hidden'}>
              <div>
                 <p onClick={handleMenuItemClick}>Track & pay</p>        
              </div>
              <div onClick={()=>{navigate('/blogs')}}>
               <p onClick={handleMenuItemClick}>Blogs</p>        
              </div>
              <div onClick={()=>{navigate('/services')}}>
                <p onClick={handleMenuItemClick}>Services</p>           
              </div>
              <div onClick={()=>{navigate('/insurance')}}>
              <p onClick={handleMenuItemClick}>Insurance</p>         
              </div>
              <div onClick={()=>{navigate('/login')}}>
              <p onClick={handleMenuItemClick}>Login</p>         
              </div>
             
            </div>
          </div>
        </>
    )
})
export default Headersub



