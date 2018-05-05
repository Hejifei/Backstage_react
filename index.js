import React from 'react';
import ReactDOM from 'react-dom';
import './src/index.css';
import { DatePicker } from 'antd';
import Layout from './src/component/layout'

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Layout />, document.getElementById('root'));