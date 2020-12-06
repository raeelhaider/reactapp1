
import React from 'react';
import './App.css';
import Technology from './technology.js';


function App() {
  return (
    <div>
     
      <Technology latest="Cloud Computing" latest2="Devops"/>
      
      <hr/>
      
      <Technology latest="Artificial Intelligence" latest2="Data Science"/>

      <hr/>

      <Technology latest="Cyber Security" latest2="Pan Testing"/>
      
    </div>
  );
}

export default App;
