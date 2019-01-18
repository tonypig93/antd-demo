import React, { Component } from 'react';
import { DatePicker } from 'antd';
import './App.css';
const { RangePicker } = DatePicker;
class App extends Component {
  render() {
    return (
      <div className="App">
        <RangePicker></RangePicker>
      </div>
    );
  }
}

export default App;
