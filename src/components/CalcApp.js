import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      activeNumber: 0,
      savedNumber: 0,
      operator: 0,
    };
  }

  resetState() {
    this.setState({
      status: 0,
      activeNumber: 0,
      savedNumber: 0,
      operator: 0,
    });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  /**
   * [inputNumber description]
   * @param {number} x input number
   */
  inputNumber(x) {
    let activeNumber = this.state.activeNumber;
    let savedNumber = this.state.savedNumber;
    let status = this.state.status;
    if (status === 0) {
      activeNumber = x;
      status = 1;
    } else if (status === 1 || status === 3) {
      activeNumber = 10 * this.state.activeNumber + x;
      // status staty the same
    } else if (status === 2) {
      activeNumber = x;
      savedNumber = this.state.activeNumber;
      status = 3;
    }

    this.setState({
      status,
      activeNumber,
      savedNumber,
    });

    this.debug();
  }

  /**
   * [inputOperator description]
   * @param  {number} op 0: +, 1: -, 2: x, 3, /
   */
  inputOperator(op) {
    console.log(`input operator : ${op}`);
    let status = this.state.status;
    // let activeNumber = this.state.activeNumber;
    // let savedNumber = this.state.savedNumber;
    let operator = this.state.operator;

    if (status === 0) {
      // do nothing
    } else if (status === 1) {
      // status
      status = 2;
      // active number
      // savedNumber
      // operator
      operator = op;
    } else if (status === 2) {
      // status
      // active number
      // savedNumber
      // operator
      operator = op;
    } else if (status === 3) {
      this.inputEqual();
      status = 1;
      operator = op;
    }

    this.setState({
      status,
      operator,
    });
    this.debug();
  }

  /**
   * [inputEqual description]
   */
  inputEqual() {
    console.log('input equal');
    let status = this.state.status;
    let activeNumber = this.state.activeNumber;
    let savedNumber = this.state.savedNumber;
    let operator = this.state.operator;
    console.log(`status : ${status}`);

    if (status === 3) {
      // calc
      if (operator === 0) {
        activeNumber += savedNumber;
      } else if (operator === 1) {
        activeNumber = savedNumber - activeNumber;
      } else if (operator === 2) {
        activeNumber *= savedNumber;
      } else if (operator === 3) {
        activeNumber = savedNumber / activeNumber;
      }

      status = 1;
      savedNumber = 0;
      operator = 0; // not important
    }

    this.setState({
      status,
      activeNumber,
      savedNumber,
      operator,
    });
    this.debug();
  }

  debug() {
    console.log(`status : ${this.state.status}`);
    console.log(`operator : ${this.state.operator}`);
    console.log(`activeNumber : ${this.state.activeNumber}`);
    console.log(`savedNumber : ${this.state.savedNumber}`);
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.activeNumber}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.inputOperator(3)}>
              ÷
            </CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.inputNumber(7)}>7</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.inputNumber(8)}>8</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.inputNumber(9)}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.inputOperator(2)}>
              x
            </CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.inputNumber(4)}>4</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.inputNumber(5)}>5</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.inputNumber(6)}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.inputOperator(1)}>
              -
            </CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.inputNumber(1)}>1</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.inputNumber(2)}>2</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.inputNumber(3)}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.inputOperator(0)}>
              +
            </CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={() => this.inputNumber(0)}>
              0
            </CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.inputEqual()}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
