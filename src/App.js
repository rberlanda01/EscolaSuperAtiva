import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Navbarr from './containers/Navbar'
import Footer from './containers/Footer'
import Fotos from './containers/Fotos'
import './app.css'
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import "mdbreact/dist/css/style.css"


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="full-height" >
          <Navbarr />
        
          <div className="content"> 
          
            <Routes />
          </div>
          <div>
            <Footer />
          </div>
        </div>

      </Router>

    );
  }
}

export default hot(module)(App)
