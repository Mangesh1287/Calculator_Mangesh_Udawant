import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addElem, equalTo, clearCalc } from './actions';
import './App.css';

class App extends Component {
  render() {
    const { value, btns, addElem, equalTo, clearCalc } = this.props;
    return (
      <div className="App">
        <div className="value-container">
          <input type="text" value={value} />
        </div>
        <div className="buttons-container">
          {btns.map((item, key) => {
            if(item === "C"){
              return(
                <button onClick={ () => clearCalc() } key={key}>{item}</button>
              )
            } else if(item === "="){
              return(
                <button onClick={ equalTo.bind(this, value) } key={key}>{item}</button>
              )
            } else {
              return(
                <button onClick={ addElem.bind(this, item) } key={key}>{item}</button>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    value: state.value,
    btns: state.btns
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addElem: (text) => dispatch(addElem(text)),
    equalTo: (value) => dispatch(equalTo(value)),    
    clearCalc: () => dispatch(clearCalc())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
