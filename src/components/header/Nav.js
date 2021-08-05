import React from 'react'
import {withRouter} from 'react-router-dom'

function Nav(props){

    return (
        <ul className='nav'>
            <li>
                <button onClick={()=> {
                    props.history.push('/')
                    props.setScrollTo('releases')
                }}>releases</button>
            </li>
            <li>
                <button onClick={() => {
                props.history.push('/')
                props.setScrollTo('merch')
                }}>merch</button>
            </li>
            <li className='nav-about'><button onClick={()=> {
                    props.history.push('/')
                    props.setScrollTo('about')
                }}>about</button>
            </li>
            <li><button onClick={()=> {
                    props.history.push('/')
                    props.setScrollTo('contact')
                }}>contact</button>
            </li>
        </ul>
    )
}


export default withRouter(Nav)