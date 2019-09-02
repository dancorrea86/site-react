import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'


class Aside extends React.Component {
  render() {
    return (
      <div className="aside">
        <div>
          <Link to="/"><li className="texto">Main</li></Link>
          <Link to="/calculator"><li className="texto">Calculator</li></Link>
          <Link to="/formulario"><li className="texto">Formulario</li></Link>
        </div>
      </div>
    );
  }
}

export default Aside;
