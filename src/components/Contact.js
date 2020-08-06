import React from 'react'

function Contact(){
    return(
        <section id='contact'>
            <div className='section-title-container'>
                <img className='contact-background-logo' alt='lost art logo' src={require('../images/logo-mic.png')}/>
                <ul className='contact-info'>
                    <li className='email'><a href='mailto:music@lostartrecords.com'>music@lostartrecords.com</a></li>
                    <li className='address'>1102 Live Oak Ridge, Austin, Texas 78746</li>
                    <li className='phone'>512-472-9770</li>
                </ul> 
            </div>
        </section>
    )
}

export default Contact