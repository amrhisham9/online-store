import React from 'react'
import logo from '../whitelogo.png'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
       <React.Fragment>
           <div id='c3' className='container-fluid c3'>
               <div className='row'>
                   <div className='col-md-3'>
                        <img src={logo} alt='logo'/>
                   </div>
                   <div className='col-md-3'>
                       <ul className='list'>

                           <Link to='/products'><li><a href='#c3'>Products</a></li></Link>
                           <li><a href='#c3'>About</a></li>
                           <li><a href='#c3'>Team</a></li>
                       </ul>
                    </div>
                    <div className='col-md-3'>
                        <ul className='list'>
                           <li><a href='#c3'>Contact Us</a></li>
                           <li><a href='#c3'>Terms</a></li>
                           <li><a href='#c3'>Privacy</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 icons-padd'>
                        <i className="fab fa-facebook-square fa-lg icon"></i>
                        <i className="fab fa-twitter-square fa-lg icon"></i>
                        <i className="fab fa-instagram-square fa-lg icon"></i>
                   </div>
               </div>
                <p className='copyright-p'>©Copyright 2020, Amr Hisham.</p>
              
           </div>
       </React.Fragment>
    )
}
