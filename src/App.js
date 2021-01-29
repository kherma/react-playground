import React from 'react';
import './App.css';
import Employee from './Components/Employee';

const App = () => {
  return (
    <div className="App">
      <h1>Company Directory</h1>
      <Employee name="Matis" />
      <Employee name="Metis" />
      <Employee name="Mitis" />
      <Employee name="Motis" />
      <Employee name="Mutis" />
    </div>
  );
};

export default App;
