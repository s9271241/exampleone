import React from 'react';
class ExampleCombineStateProps extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           header: "Header from props...",
           content: "Content from props..."
        }
     }
    render() {
        return (
            <div>
                <h1>Combine State and Props</h1>
                <Header headerprops={this.state.header} />
                <Content contentprops={this.state.content} />
            </div>
        )
    }

}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>header :{this.props.headerprops}</h1>

            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>content :{this.props.contentprops}</h1>
            </div>
        )
    }
}
export default ExampleCombineStateProps