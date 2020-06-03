import React from 'react'
import './MyComponent.css'


class MyComponent extends React.Component {
    // NOW I CAN USE THE STATE
    state = {
        counter: 0,
        id: this.props.id
    }

    increase = () =>{
        // DON'T DO THIS --> this.state.counter = this.state.counter +1
        this.setState({
            counter: this.state.counter + 1,
            id: this.state.id + 1
        })
    }
    decrease = () =>{
        // DON'T DO THIS --> this.state.counter = this.state.counter - 1
        this.setState({
            counter: this.state.counter - 1,
            id: this.state.id - 1
        })
    }

    render(){
        console.log('PROPS OBJECT',this.props)
        console.log('STATE',this.state)
        return (
            <div>
                {this.props.text &&(
                    <>
                        <button onClick={this.decrease}>DECREASE</button>
                        <button onClick={this.increase}>INCREASE</button>
                    </>
                )}
                
                <p>My counter from the state is {this.state.counter}</p>
                <p>My id from the state is {this.state.id}</p>
                <h1 className="title">{this.props.text|| 'NO TITLE PROVIDED'}</h1>
                <span style={this.props.style}>The id of the variable is: {this.props.id}</span>
            </div>
        )
    }
}

// const MyComponent = (props) => {
//     console.log(props)
// return (
//     <div>
//     <h1 className="title">{props.text|| 'NO TITLE PROVIDED'}</h1>
//     <span style={props.style}>The id of the variable is: {props.id}</span>
//     </div>
// )

// }

export default MyComponent

// PROPS
// STATE
