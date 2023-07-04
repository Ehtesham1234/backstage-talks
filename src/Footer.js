// Footer.js
import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <p>
                    Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
                </p>
                <span>2013 <a href='/'>Published by studio Milk</a></span>
                <h4><a href=''>Privacy Policy</a></h4>
            </div>
            <div className="footer__right">
                <p><a href='/'>info@backstagetalks.com</a></p>
            </div>
        </div>
    )
}

export default Footer 