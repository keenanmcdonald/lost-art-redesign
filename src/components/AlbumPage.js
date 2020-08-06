import React from 'react'
import '../css/AlbumPage.css'
import ReactHtmlParser from 'react-html-parser'


function AlbumPage(props){

    const purchase = []

    for (let i = 0; i < props.purchase.length; i++){
        purchase.push(
            <div key={i} className='purchase-form-container'>
                <form id={`paypal${i}`} target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">           
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value={props.purchase[i].button_id}/>
                    <div className='purchase-button-container'>
                        <button type='submit' form={`paypal${i}`} className='album-page-purchase-button format'>{props.purchase[i].format.toUpperCase()}</button>
                        <button type='submit' form={`paypal${i}`} className='album-page-purchase-button price'>{props.purchase[i].price}</button>
                    </div>
                </form>
            </div> 
        )
    }

    const description = []

    for (let i = 0; i < props.description.length; i++){
        description.push(<p key={i} className='album-page-description'>{props.description[i]}</p> )
    }

    return (
        <section className='album-page'>
            <div className='album-page-main row'>
                <div className='col-sm-12 col-md-6'> 
                    <img className='album-page-cover' alt={`${props.title} cover`} src={require(`../images/covers/${props.cover}`)}/>
                </div>
                <div className='title-purchase-container col-sm-12 col-md-6'>
                    <h1 className='album-page-artist'>{props.artist.toUpperCase()}</h1>
                    <h2 className='album-page-title'>{props.title}</h2>
                    <p className='album-page-code'>{props.code}</p>
                    <div className='album-page-purchase-container'>
                        <p className='album-page-purchase'>Purchase</p>
                        {purchase}
                    </div> 
                    {props.quote ?
                    <div className='quote-container'>
                        <p className='quote'>{props.quote}</p>
                        <p className='quote-attribution'>{props.quote_attribution}</p>
                    </div>
                    : ''}
                </div> 
            </div>
            <div className='album-page-description-container'>
                {description} 
                <p className='notes'>{props.notes}</p>
            </div>
            {props.video ? 
                <div className='album-page-video-container'>
                    {ReactHtmlParser(props.video)}
                </div>
            : ''}
        </section>
    )
}

export default AlbumPage