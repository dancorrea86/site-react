import React from 'react';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    
    
    
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="main">
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <button type="submit" value="Enviar">Enviar</button>
        </form>
      </div>
    )
  }

}

export default NameForm;