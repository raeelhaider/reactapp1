import React from "react";

function University (props)
 {
     return (
         <div>
             <h1> I studied {props.education} </h1>
             <h2> After graduation, I learned {props.shift} </h2>
         </div>
     )
 }

 export default University;