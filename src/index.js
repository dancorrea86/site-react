import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HashRouter } from 'react-router-dom'

import Routes from './Routes.jsx'
import Aside from './Aside.js'
import Header from './Header.js'
import Footer from './Footer.js'


class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="content">
          <Header />
          <Aside />
          <Routes />
          <Footer />
        </div>
      </HashRouter>

    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)