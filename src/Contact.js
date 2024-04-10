import './App.css';
import './Media.css';

import React from 'react'

function Contact() {
  return (
    <div>
        <section id='contact'>
            <div className='container'>
                <h3><span>CONTACT</span> US</h3>
                <div className='contact-container'>
                    <div className='contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60189.36762251211!2d72.76373737141698!3d19.46265897506187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aa23dce7efbf%3A0x99bd87871748d8f4!2sVirar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712479553509!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='contact-form'>
                        <h4>GET IN TOUCH</h4>
                        <div className='from-input'>
                           <p><i class="fa-solid fa-address-book"></i> <input type="text" placeholder='name' /></p>
                           <p><i class="fa-solid fa-envelope"></i> <input type="email" placeholder='email' /></p>
                           <p><i class="fa-solid fa-phone-flip"></i> <input type="number" placeholder='number' /></p>
                        </div>
<div className='form-btn'>
    <button>Contact Now</button>
</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact