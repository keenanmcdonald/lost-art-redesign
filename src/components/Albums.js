import React from 'react'
import Album from './Album'

function Albums(props){
    let albums = []

    for (let i = 0; i < props.albums.length; i++){
        albums.push(<Album key={i} cover={props.albums[i].cover} title={props.albums[i].title} artist={props.albums[i].artist} path={props.albums[i].path}/>)
    }

    return(
        <section id='releases'>
            <div className='albums row no-gutters'>
                {albums}
            </div>
        </section>
    )
}

export default Albums