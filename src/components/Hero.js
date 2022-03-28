import React from 'react'
import {withRouter} from 'react-router-dom'

function Hero(props){
    return (
        <section id='hero' className='row no-gutters' onClick={() => props.history.push('/igottheblues')}>
            <div className='col-8'>
                <div className='hero-text'>
                    <h1 className='hero-artist'>CODY HUBACH</h1> 
                    <h2 className='hero-title'>I GOT THE BLUES</h2>
                    <h3 className='hero-subtitle'>available on cd and streaming platforms now</h3>
                </div>
            </div>
            <div className='col-4 photo-container'>
                <img className='blaze-photo' alt='cody hubach looking forward' src={require('../images/cody-cutout.png')}/>
            </div>
        </section>
    )
}



export default withRouter(Hero)