import React from 'react'
import '../css/AlbumPage.css'
import ReactHtmlParser from 'react-html-parser'
import {isMobile} from 'react-device-detect'


class AlbumPage extends React.Component{

    constructor(props){
        super(props)
        this.description = React.createRef()
        this.state = {
            width: 300,
            height: 400,
        }
    }

    componentDidMount(){
        this.setState({
            width: this.description.current.offsetWidth * .8,
            height: isMobile ? 400 : (this.description.current.offsetHeight > 500 ? 500 : this.description.current.offsetHeight)
        })
    }

    render(){
        const purchase = []
        const description = []
        const tracklist = []

        for (let i = 0; i < this.props.purchase.length; i++){
            purchase.push(
                <div key={i} className='purchase-form-container'>
                    <form id={`paypal${i}`} target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">           
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value={this.props.purchase[i].button_id}/>
                        <div className='purchase-button-container'>
                            <button type='submit' form={`paypal${i}`} className='album-page-purchase-button format'>{this.props.purchase[i].format.toUpperCase()}</button>
                            <button type='submit' form={`paypal${i}`} className='album-page-purchase-button price'>{this.props.purchase[i].price}</button>
                        </div>
                    </form>
                </div> 
            )
        }
    
    
        for (let i = 0; i < this.props.description.length; i++){
            description.push(<p key={i} className='album-page-description'>{this.props.description[i]}</p> )
        }

        if (this.props.tracklist){
            for (let i = 0; i < this.props.tracklist.length; i++){
                tracklist.push(<li key={i} className='album-page-track'>{this.props.tracklist[i]}</li>)
            }
        }
    
        return (
            <section className='album-page'>
                <div className='album-page-main row'>
                    <div className='col-sm-12 col-md-6'> 
                        <img className='album-page-cover' alt={`${this.props.title} cover`} src={require(`../images/covers/${this.props.cover}`)}/>
                    </div>
                    <div className='title-purchase-container col-sm-12 col-md-6'>
                        <h1 className='album-page-artist'>{this.props.artist.toUpperCase()}</h1>
                        <h2 className='album-page-title'>{this.props.title}</h2>
                        <p className='album-page-code'>{this.props.code}</p>
                        <div className='album-page-purchase-container'>
                            <p className='album-page-purchase'>Purchase</p>
                            {purchase}
                        </div> 
                        {this.props.quote ?
                        <div className='quote-container'>
                            <p className='quote'>{this.props.quote}</p>
                            <p className='quote-attribution'>{this.props.quote_attribution}</p>
                        </div>
                        : ''}
                    </div> 
                </div>
                <div className='album-page-description-tracklist-container row'>
                    <div ref={this.description} className={`album-page-description-container ${this.props.spotify || this.props.tracklist ? 'col-sm-6' : ''}`}>
                        {description} 
                    </div>
                    {this.props.spotify ? 
                        <div className='album-page-spotify col-sm-6'>
                            <iframe title='spotify' src={`https://open.spotify.com/embed/album/${this.props.spotify}`} width={this.state.width} height={this.state.height} frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    : (this.props.tracklist ?
                        <div className='album-page-tracklist-container col-sm-6'>
                            <div className='album-page-tracklist-title-container'>
                                <h5 className='album-page-tracklist-title'>tracklist</h5>
                            </div>
                            <ol className='album-page-tracklist'>
                                {tracklist}
                            </ol>
                        </div>
                    : '')}
                </div>
                <p className='notes'>{this.props.notes}</p>
                {this.props.video ? 
                    <div className='album-page-video-container'>
                        {ReactHtmlParser(this.props.video)}
                    </div>
                : ''}
            </section>
        )
    
    }

}

export default AlbumPage