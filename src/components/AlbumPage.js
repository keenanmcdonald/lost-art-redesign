import React from 'react'
import '../css/AlbumPage.css'
import ReactHtmlParser from 'react-html-parser'


function AlbumPage(props){

    return (
        <section className='album-page'>
            <div className='row'>
                <div className='col-sm-12 col-md-6'> 
                    <img className='album-page-cover' alt={`${props.title} cover`} src={require(`../images/covers/${props.cover}`)}/>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <h1 className='album-page-artist'>{props.artist.toUpperCase()}</h1>
                    <h2 className='album-page-title'>{props.title}</h2>
                    <p className='album-page-code'>{props.code}</p>
                    {ReactHtmlParser(props.purchase[0].link)}
                </div> 
            </div>
            <div className='row'></div>
        </section>
    )
}


export default AlbumPage