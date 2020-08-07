import React from 'react'

function Contact(props){
    return(
        <section id='contact'>
            <div className='section-title-container'>
                <img className='contact-background-logo' alt='lost art logo' src={require('../images/logo-mic.png')}/>
                <ul className='contact-info'>
                    <li className='email'><a href={`mailto:${props.email}`}>{props.email}</a></li>
                    <li className='address'>{props.address}</li>
                    <li className='phone'>{props.phone}</li>
                </ul> 
            </div>
        </section>
    )
}

export default Contact