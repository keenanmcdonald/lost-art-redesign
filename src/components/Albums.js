import React from 'react'
import Album from './Album'

function Albums(props){
    let albums = []

    for (let i = 0; i < props.albums.length; i++){
        albums.push(<Album key={i} cover={props.albums[i].cover} title={props.albums[i].title} artist={props.albums[i].artist} path={props.albums[i].path}/>)
    }

    return(
        <section id='releases'>
            <div className='section-title-container'>
                <h3>Releases</h3>
            </div>
            <div className='albums row'>
                {albums}
            </div>
        </section>
    )
}

export default Albums