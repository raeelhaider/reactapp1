
import React from 'react';
import handleAction from './handleaction.js';
import Child from './child.js';

function App() {

  return (
    <Child onAction={handleAction}/>
    );
}


/*import University from './university.js';
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
} */

export default App;
