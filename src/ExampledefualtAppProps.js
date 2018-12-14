import React, { Component } from 'react';
class ExampledefualtAppProps extends Component {
    render() {
        return (
        <div>
            <h1>DefualtApp Props</h1>

            <h1>{this.props.header}</h1>
            <h2>{this.props.content}</h2>
            <hr />
        </div>
        )

    }

}
ExampledefualtAppProps.defaultProps={
    header:'header from default Props',
    content:'content from default props'
}
export default ExampledefualtAppProps