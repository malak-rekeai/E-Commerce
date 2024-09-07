import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
       <h1>Get Exclusive Offers On Your Email</h1>
         <p>Subscribe to our newsletter and get exclusive offers on your email</p>
         <div className='input'>
             <input type='email' placeholder='Enter your email'/>
             <button>Subscribe</button>
            </div>
    </div>
  )
}

export default NewsLetter