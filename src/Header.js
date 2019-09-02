import React from 'react';
import './index.css';

import Feather from './imgs/feather-solid.svg'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={Feather} alt=""/>
        <h1>.tax <br></br>brasil</h1>
      </div>
    );
  }
}

export default Header;