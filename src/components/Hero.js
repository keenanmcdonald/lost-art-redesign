import React from 'react'
import {withRouter} from 'react-router-dom'

function Hero(props){
    return (
        <section id='hero' className='row no-gutters' onClick={() => props.history.push('/austinouthouse')}>
            <div className='col-5 photo-container'>
                <img className='blaze-photo' alt='blaze in profile' src={require('../images/foley.jpg')}/>
                <img className='blaze-photo-slim' alt='blaze in profile' src={require('../images/foley-slim.jpg')}/>
            </div>
            <div className='col-6'>
                <div className='hero-text'>
                    <h1 className='hero-artist'>blaze foley</h1> 
                    <h2 className='hero-title'>live at the austin outhouse</h2>
                    <h3 className='hero-subtitle'>available on vinyl for the first time</h3>
                </div>
            </div>
        </section>
    )
}



export default withRouter(Hero)