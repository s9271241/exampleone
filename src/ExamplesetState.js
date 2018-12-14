import React, { Component } from 'react'
class changeState extends Component {
    element=0;
    state={
        users: [{ name: 'mohammad' },
               { name:'ali'}
              ,{name:'hassan'}
            ],
            version:'1.0.0.1'

    }
  
    addElemente=()=>{
        this.element+=1;
        this.setState({
        version:'1.0',
        users:[...this.state.users,{name:'hassan'+this.element}]
        }
        )
        console.log(this.state.users)
    }
    render() {
        return (
            <div >
<button onClick={this.addElemente}>Add ehsan</button>
{this.state.users[0].name}
<h1>{this.state.version}</h1>
            </div>
        )

    }

}
export default changeState