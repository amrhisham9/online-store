import React from 'react'
import sec from '../security.svg'
import fast from '../fast.svg'
import easy from '../easy.svg'
import {ButtonContainer} from './Button'
import Footer from './Footer'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <React.Fragment>
        <div className='container-fluid cc'>
            <div className='row'>
                <div className='col-12 cc'>
                    <h1 className='head'>Welcome to <span id='spn'>Orderino.com</span>, the</h1>
                    <a href='#r1' className='head-a'>SAFE</a>
                    <a href='#r2' className='head-a'>FAST</a>
                    <a href='#r3' className='head-a'>EASY</a>
                    <h4 className='head-h4 newfont'>way for shopping <span id='spn2'>online.</span></h4>
                </div>
            </div>
        </div>
        
        <div className='container c2'>
            <div className='row row-padd' id="r1">
                <div className='col-md-6 '>
                    <h2 className='sec-h2 paddd'>Secured Personal Data</h2>
                    <p className='sec-p paddd'>In our company we only use PayPal as our payment method. PayPal is known to be secured because when you send a payment using PayPal, the recipient won't receive sensitive financial information like your credit card or bank account number. This way, you don't have to worry about paying people you don't know.</p>
                </div>
                <div className='col-md-6 '>
                    <img src={sec} alt='secure' className='security-img' />
                </div>
            </div>
            <div className='row row-padd2' id="r2">
                <div className='col-md-6'>
                    <img src={fast} alt='calendar' className='fast-img' /> 
                </div>
                <div className='col-md-6'>
                    <h2 className='fast-h2'>In No Time</h2>
                    <p className='fast-p'>In Orderino, we mainly focus on fast delivery time for all our customers all around the globe. We are working hard now to guarantee our customers "Next-Day Delievery" option to all our products and with no additional fee. We are trying our best to keep our customers satisfied and to deliever your order as soon as possible.</p>
                </div>
            </div>
            <div className='row' id="r3">
                <div className='col-md-6 '>
                    <h2 className='sec-h22 paddd'>Easy To Use</h2>
                    <p className='sec-p paddd'>All you have to do is put your products in your cart, pay using PayPal, recieve your order as soon as possible.</p>
                    <p className='sec-pp paddd'>Just 3 Clicks!</p>
                </div>
                <div className='col-md-6 '>
                    <img src={easy} alt='secure' className='security-img' />
                </div>
            </div>
         </div>
         <div className='dark-div'>
               <div className='col-md-10'>
                    <h3 className='shop'>Start Shopping Now!</h3>
                    <Link to='/products'>
                    <ButtonContainer cart>View Products</ButtonContainer>
                    </Link>
                </div>
         </div>

        <Footer />
        </React.Fragment>
    )
}

