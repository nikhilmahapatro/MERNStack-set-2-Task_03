import logo from './logo.svg';
import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';


const App = () => {
  const colors = ['#FF0000', '#00FF00', '#0000FF'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};


export default App;
