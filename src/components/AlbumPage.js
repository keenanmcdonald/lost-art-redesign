import React, {useState, useEffect, useRef} from 'react'
import '../css/AlbumPage.css'
import ReactHtmlParser from 'react-html-parser'
import {isMobile} from 'react-device-detect'


export default function AlbumPage(props){
    const {
        purchase, 
        description, 
        tracklist, 
        artist, 
        title, 
        cover,
        code, 
        message, 
        quote, 
        quote_attribution, 
        spotify, 
        notes, 
        video
    } = props

    const [spotifyDimensions, setSpotifyDimensions] = useState({
        width: 300,
        height: 400,
    })
    const descriptionRef = useRef()

    useEffect(() => {
        setSpotifyDimensions({
            width: descriptionRef.current.offsetWidth * .8,
            height: isMobile ? 400 : (descriptionRef.current.offsetHeight > 500 ? 500 : descriptionRef.current.offsetHeight)
        })
    }, [description])

    console.log({notes})

    return (
        <section className='album-page'>
            <div className='album-page-main row'>
                <div className='col-sm-12 col-md-6'> 
                    <img className='album-page-cover' alt={`${title} cover`} src={require(`../images/covers/${cover}`)}/>
                </div>
                <div className='title-purchase-container col-sm-12 col-md-6'>
                    {artist && <h1 className='album-page-artist'>{artist.toUpperCase()}</h1>}
                    <h2 className='album-page-title'>{title}</h2>
                    <p className='album-page-code'>{code}</p>
                    <div className='album-page-purchase-container'>
                        <p className='album-page-purchase'>Purchase</p>
                        {purchase.map((option, i) => (
                            <div key={i} className='purchase-form-container'>
                            <form id={`paypal${i}`} target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">           
                                <input type="hidden" name="cmd" value="_s-xclick"/>
                                <input type="hidden" name="hosted_button_id" value={option.button_id}/>
                                <div className='purchase-button-container'>
                                    <button type='submit' form={`paypal${i}`} className={`album-page-purchase-button format ${option.disabled ? 'disabled' : ''}`}>{option.format.toUpperCase()}</button>
                                    <button type='submit' form={`paypal${i}`} className={`album-page-purchase-button price ${option.disabled ? 'disabled' : ''}`}>{option.price}</button>
                                </div>
                            </form>
                        </div>
                        ))}
                    </div> 
                    <p className='message'>{message}</p>
                    {quote ?
                    <div className='quote-container'>
                        <p className='quote'>{quote}</p>
                        <p className='quote-attribution'>{quote_attribution}</p>
                    </div>
                    : ''}
                </div> 
            </div>
            <div className='album-page-description-tracklist-container row'>
                <div ref={descriptionRef} className={`album-page-description-container ${spotify || tracklist ? 'col-sm-6' : ''}`}>
                    {description.map((paragraph, i) => (
                        <p key={i} className='album-page-description'>{paragraph}</p>
                    ))}
                    <div className='notes-container'>
                        {Array.isArray(notes) ?
                            notes.map(note =>  <p className='note'>{note}</p>) : 
                            <p className='note'>{notes}</p>
                        }
                    </div>
                </div>
                {spotify ? 
                    <div className='album-page-spotify col-sm-6'>
                        <iframe title='spotify' src={`https://open.spotify.com/embed/album/${spotify}`} width={spotifyDimensions.width} height={spotifyDimensions.height} frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                : (tracklist ?
                    <div className='album-page-tracklist-container col-sm-6'>
                        <div className='album-page-tracklist-title-container'>
                            <h5 className='album-page-tracklist-title'>tracklist</h5>
                        </div>
                        <ol className='album-page-tracklist'>
                            {tracklist.map((trackName, i) => (
                                <li key={i} className='album-page-track'>{trackName}</li>
                            ))}
                        </ol>
                    </div>
                : '')}
            </div>
            {video ? 
                <div className='album-page-video-container'>
                    {ReactHtmlParser(video)}
                </div>
            : ''}
        </section>
    )
}
