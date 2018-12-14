import React,{Component} from 'react';
class ExampleProps extends Component{
render(){
    return(
        <div>
            <h1>PropsExample</h1>
          
            <h1>{this.props.header}</h1>
            <h2>{this.props.content}</h2>
            <hr/>
        </div>
    );
}

}
export default ExampleProps;