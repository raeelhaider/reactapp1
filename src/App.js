
import React from 'react';
import './App.css';
import University from './university.js';


function App() {
  return (
    <div>
      
      <University education="Electronic Engineering" shift="Industrial Electronics"/>

      <hr/>

      <University education="Electronic Engineering" shift="Network Engineering"/>

      <hr/>

      <University education="Electronic Engineering" shift="Software Development"/>
      
    </div>
  );
}

export default App;
