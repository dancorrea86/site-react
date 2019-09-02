import React from 'react';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'result',
      inputVal    : '',
      inputVal_1: '',
      inputVal_2: ''
    };

    this.handleMask = this.handleMask.bind(this)
    this.showTable = this.showTable.bind(this)
    this.clearCalculator = this.clearCalculator.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInput1Change = this.handleInput1Change.bind(this)
    this.handleInput2Change = this.handleInput2Change.bind(this)
  }

  handleMask(event) {
    console.log(event)
  }
  
  showTable(event) {
    this.setState({class: 'show'})
    console.log(this.state.class)
  }

  clearCalculator(event) {
    this.setState({class: 'result'})
    // this.setState({inputVal_1: ''})
  }

  handleInputChange = (event) => {
    this.setState({inputVal: event.target.value});
  }

  handleInput1Change = (event) => {
    this.setState({inputVal_1: event.target.value});
  }

  handleInput2Change = (event) => {
    this.setState({inputVal_2: event.target.value});
  }

  render() {
    return (
      <div className="main">
        <div>
          <h1>Título</h1>
          <form className="form">
            <input id="value"        type="text" placeholder="Valor da Operação"      value={this.state.inputVal}   onChange={this.handleInputChange}></input>
            <input id="externalRate" type="text" placeholder="Alíquota Interestadual" value={this.state.inputVal_1} onChange={this.handleInput1Change}></input>
            <input id="internalRate" type="text" placeholder="Alíquota Interna"       value={this.state.inputVal_2} onChange={this.handleInput2Change}></input>
            <button type="submit">Calcula</button>
            <button onClick={this.clearCalculator}>Limpar</button>
          </form>
          <div className={this.state.class}>
            <table className="">
            <tbody>
                <tr>
                  <th>Imposto</th>
                  <th>valor</th>
                </tr>
                <tr>
                  <td>ICMS Diferencial</td>
                  <td>R$ 12,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


export default Calculator;