import React from 'react';
import './css/App.css';
import Header from './components/header/Header'
import Hero from './components/Hero'
import Albums from './components/Albums'
import About from './components/About'
import Contact from './components/Contact'
import {Route} from 'react-router-dom'
import AlbumPage from './components/AlbumPage'
import {withRouter} from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      albums: [],
      loaded: false,
      scrollTo: '',
      about: [],
      contact: {
        email: "",
        phone: "",
        address: ""
      },
    }
  }

  async getData() {
    const res = await fetch("/album-data.json");
    const resText = await res.text();
    const {albums, about, contact} = await JSON.parse(resText)
    return this.setState({albums, about, contact, loaded: true});
  }

  componentDidMount() {
    if (!this.state.loaded){
      this.getData();
    }
  }

  componentDidUpdate(){
    console.log('did update: ', this.state.scrollTo)
    if (this.state.scrollTo && document.getElementById(this.state.scrollTo)){
      document.getElementById(this.state.scrollTo).scrollIntoView(true)
    }
    else{
      window.scrollTo(0, 0);
    }
  }

  setScrollTo(elementId){
    this.setState({scrollTo: elementId})
  }


  render(){
    const routes = []

    for (let i = 0; i < this.state.albums.length; i++){
      routes.push(<Route key={i} path={this.state.albums[i].path} render = {() => <AlbumPage {...this.state.albums[i]}/>}/>)
    }

    return (
      <main>
        <Header setScrollTo={(elementId) => this.setScrollTo(elementId)}/>
        <Route exact path='/' render={() => 
          <div>
            <Hero/>
            <Albums albums={this.state.albums} ></Albums>
            <About text={this.state.about}/>
          </div>}/>
        {routes}
        <Contact {...this.state.contact} />
      </main>
    )  
  }
}

export default withRouter(App);
