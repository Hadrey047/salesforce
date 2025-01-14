
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import './Navbar.css'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () =>{
    if (window.innerWidth <= 1150){
      setShowMenu(false);
    }
  };
    
  return (
    <>
    <header className="header">
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
         salesforce made simple
       </NavLink>

       <div
         className={`nav__menu ${showMenu ? "show-menu" : ""}`}
         id="nav-menu">
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/about" className="nav__link" onClick={closeMenuOnMobile}>
               About
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/blog" className="nav__link" onClick={closeMenuOnMobile}>
               Blog
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/consulting" className="nav__link" onClick={closeMenuOnMobile}>
               Consulting
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/courses" className="nav__link" onClick={closeMenuOnMobile}>
               Courses
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/login" className="nav__link" onClick={closeMenuOnMobile}>
               Login
             </NavLink>
           </li>
         </ul>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           <IoClose />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
         <IoMenu />
       </div>
     </nav>
   </header>

    </>
  )
}

export default Navbar