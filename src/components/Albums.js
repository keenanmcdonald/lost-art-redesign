import React from 'react'
import Album from './Album'

function Albums(props){
    let albums = []

    for (let i = 0; i < props.albums.length; i++){
        albums.push(<Album key={i} {...props.albums[i]}/>)
    }

    return(
        <section id='releases'>
            <div className='section-title-container'>
                <h3>Releases</h3>
            </div>
            <div className='albums row no-gutters'>
                {albums}
            </div>
        </section>
    )
}

export default Albums