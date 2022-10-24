import logo from './logo.svg';
import './App.css';
import React, { createRef } from 'react';
import { connect } from 'react-redux';

const Item = ({name, price}) => (
  <li>{name}, ${price}</li>
)

function App() {
  return (
    <div className="App">
      <h1 className='mt-3 text-3xl font-medium text-red-500'>React Redux</h1>
    </div>
  );
}

export default App;
