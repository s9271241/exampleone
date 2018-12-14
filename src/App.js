import React, { Component } from 'react';

class App extends Component {
  render() {
    var textcenter = {
      textAlign: 'center'
    }
    var stylegreen = {
      fontSize: 50,
      color: 'white',
      width: 200,
      backgroundColor: 'green'
    }
    var stylewhite = {
      fontSize: 50,
      color: 'black',
      width: 200,
      backgroundColor: 'white'
    }
    var stylered = {
      fontSize: 50,
      color: 'white',
      width: 200,
      backgroundColor: 'red'
    }
    return (

      <div style={textcenter}>
        <app2></app2>
        <div style={stylegreen}>hi</div>
        <br />
        <div style={stylewhite}> Iranian</div>
        <br />
        <div style={stylered}>hi</div>
        <br />
        {1 + 1}
      </div>
    );
  }
}
export default App;
