import React from 'react'
import {withRouter} from 'react-router-dom'

function Album(props){

    return (
        <div className='album col-6 col-lg-4' onClick={() => props.history.push(props.path)}>
            <img className='cover' alt={`${props.title} cover`} src={require(`../images/covers/${props.cover}`)}/>
            <div className='album-text-container'>
                <h4 className='artist'>{props.artist}</h4>
                <h4 className='title'>{props.title}</h4>
            </div>
        </div>
    )
}

export default withRouter(Album)