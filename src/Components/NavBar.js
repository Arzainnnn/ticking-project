import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
 import React from 'react';
 import './NavBar.css';
 
 function NavBar() {
   return (
     <div className='Navbar'>
      <ul>
       <li><Link to="/" style={{ textDecoration: 'none' , color:'#000',margin: 4, border: '2px solid red' , float: 'right', display: 'block', padding: '14px 16px' }} >Home</Link></li>
       <li><Link to="/StopWatch" style={{ textDecoration: 'none' , color:'#000',margin: 4, border: '2px solid red' , float: 'right', display: 'block', padding: '14px 16px' }}>StopWatch</Link></li>
     <li><Link to="/Counter" style={{ textDecoration: 'none' , color:'#000',margin: 4, border: '2px solid red' , float: 'right', display: 'block', padding: '14px 16px' }}>Counter</Link></li>
     <li><Link to="/Clock" style={{ textDecoration: 'none' , color:'#000',margin: 4, border: '2px solid red' , float: 'right', display: 'block', padding: '14px 16px' }}>Clock</Link></li>
     </ul>
     </div>
   )
 }
 
 export default NavBar