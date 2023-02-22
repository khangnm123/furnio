import React from 'react'
import './css/Footer.css'
import Map from './svg/location-dot-solid.svg'
import Call from './svg/phone-solid.svg'
import Paper from './image/Vector.png'
function Footer() {
  return (
    <footer>
        <div className="content__footer">
            <div className="container__footer">
            <div className="footer__h2">
                <h2>Funiro.</h2>
            </div>
            <div className="footer__p">
                <p>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
            </div>
            <div className="footer__icon">
                <div className="footer__map">
                    <img src={Map} alt="" width="20px" />
                    <p>Sawojajar Malang, Indonesia</p>
                </div>
                <div className="footer__call">
                <img src={Call} alt="" width="20px" />
                    <p>+6289 456 3455</p>
                </div>
            </div>
            <div className="footer__web">
                <p>www.funiro.coms</p>
            </div>
            </div>
            <div className="container__footer">
            <div className="footer__h2">
                <h2 id='mn'>Menu</h2>
            </div>
            <div className="footer__ul">
                <ul>
                <li>Products</li>
                <li>Rooms</li>
                <li>Inspiration</li>
                <li>About Us</li>
                <li>Terms & Policy </li>
                </ul>
            </div>
            </div>
            <div className="container__footer">
            <div className="footer__h2">
                    <h2 id='mn'>Account</h2>
            </div>
            <div className="footer__ul">
                <ul>
                <li>My Account</li>
                <li>Checkout</li>
                <li>My Cart</li>
                <li>My catalog</li>
                </ul>
            </div>
            </div>
            <div className="container__footer">
            <div className="footer__h2">
                    <h2 id='mn'>Stay Connected</h2>
            </div>
            <div className="footer__ul">
                <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                </ul>    
            </div>
            </div>
            <div className="container__footer">
            <div className="footer__h2">
                <h2 id='mn'>Stay Update</h2>
            </div>
            <div className="footer__ip">
                <input type="email"  placeholder='Enter your email'/>
                <button type='submit'><img src={Paper} alt="" /></button>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
