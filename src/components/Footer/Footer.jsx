import React from 'react'
import './footer.css'
import footer_icon from '../../Assets/logo.png'
import instagram from '../../Assets/instagram_icon.png'
import whatsapp from '../../Assets/Whatsapp_icon.png'
import pintester from '../../Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icon'>
       <img src={footer_icon} />
       <p>Shoper</p>
      </div>
      <ul className='footer-list'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contaact</li>
        </ul>
        <div className='footer-social'>
         <div className='footer-social-container'>
              <img src={instagram} /> 
            </div>
            <div className='footer-social-container'>
            <img src={whatsapp} />
            </div>
            <div className='footer-social-container'>
            <img src={pintester} />
            </div>
        </div>
        <hr />
        <div className='footer-copy'>
            <p>© 2021 Shoper. All rights reserved</p>
            </div>
    </div>
  )
}
export default Footer