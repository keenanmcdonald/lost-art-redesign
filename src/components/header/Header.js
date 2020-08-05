import React from 'react'
import Nav from './Nav'
import {withRouter} from 'react-router-dom'

function Header(props) {
    return (
        <header>
            <div className='logo-container' onClick={() => props.history.push('/')}>
                <img className='logo logo-vertical' alt='logo' src={require('../../images/logo.png')}/>
                <img className='logo logo-horizontal' alt='logo' src={require('../../images/logo-horizontal.png')}/>
            </div>
            <div className='nav-container'>
                <Nav/>
            </div>
            <div className='cart-container'>
                <img className='cart' alt='shopping cart' src={require('../../images/cart-icon.png')}/>
            </div>
        </header>
    )
}

export default withRouter(Header);