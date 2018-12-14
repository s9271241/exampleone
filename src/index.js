import React from 'react';
import ReactDOM from 'react-dom';

import ExampleProps from './ExampleProps'
import ExampledefualtAppProps from './ExampledefualtAppProps'
import ExampleCombineStateProps from './ExampleCombineStateProps'
import Person from './Person/person';
import ExamplesetSate from './ExamplesetState'
ReactDOM.render(
    <section>
        <ExamplesetSate/>
        <Person name='hassan' age='27' >this is my content for props children</Person>
        <ExampleProps header="header" content="content" />
        <ExampledefualtAppProps />
        <ExampleCombineStateProps />
        
    </section>
    , document.getElementById('root'));


