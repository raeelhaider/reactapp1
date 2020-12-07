
import React from 'react';
import University from './university.js';
import Technology from './technology.js';



function App() {
  return (
    <div>
      
      <University education="BS" shift="Industrial Electronics"/>
      <Technology field="Electronics Engineering"/>

      <hr/>

      <University education="BE" shift="Network Engineering"/>
      <Technology field="Computer Engineering"/>
      <hr/>

      <University education="BS" shift="Software Development"/>
      <Technology field="Software Engineering"/>
    </div>
  );
}

export default App;
