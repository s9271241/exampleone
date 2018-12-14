import React from 'react';

const Person = (props) => {
   const redColor={
color:'red'
    }
    return (
        <div>
           my name is {props.name}
           <br/>
           I am {props.age} years old 

<br/>
           props.children:
          <span style={redColor}> 
          {props.children}
          </span>

        </div>
        )
}
export default Person;